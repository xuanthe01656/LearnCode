const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = '/mnt/data/python_foundation_status_update';
const report = {
  checkedAt: new Date().toISOString(),
  files: [],
  validationErrors: [],
};

function checkJson(file) {
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'));
    report.files.push({ file: path.relative(root, file), ok: true, type: 'json' });
  } catch (error) {
    report.validationErrors.push(`${file}: ${error.message}`);
  }
}

function checkJs(file) {
  const cp = require('child_process').spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (cp.status !== 0) report.validationErrors.push(`${file}: ${cp.stderr || cp.stdout}`);
  else report.files.push({ file: path.relative(root, file), ok: true, type: 'js' });
}

function checkJsx(file) {
  try {
    const source = fs.readFileSync(file, 'utf8');
    const out = ts.transpileModule(source, {
      compilerOptions: {
        jsx: ts.JsxEmit.React,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        allowJs: true,
      },
      reportDiagnostics: true,
      fileName: file,
    });
    const diagnostics = out.diagnostics || [];
    const errors = diagnostics.filter((d) => d.category === ts.DiagnosticCategory.Error);
    if (errors.length) {
      report.validationErrors.push(`${file}: ${errors.map((d) => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('; ')}`);
    } else {
      report.files.push({ file: path.relative(root, file), ok: true, type: 'jsx-transpile' });
    }
  } catch (error) {
    report.validationErrors.push(`${file}: ${error.message}`);
  }
}

[
  `${root}/src/i18n/locales/vi/home.json`,
  `${root}/src/i18n/locales/en/home.json`,
  `${root}/src/i18n/locales/vi/courses.json`,
  `${root}/src/i18n/locales/en/courses.json`,
].forEach(checkJson);

checkJs(`${root}/src/data/courses.js`);
[
  `${root}/src/pages/Home.jsx`,
  `${root}/src/components/CourseCard.jsx`,
  `${root}/src/pages/CourseDetail.jsx`,
  `${root}/src/pages/CourseList.jsx`,
].forEach(checkJsx);

const viHome = JSON.parse(fs.readFileSync(`${root}/src/i18n/locales/vi/home.json`, 'utf8'));
const enHome = JSON.parse(fs.readFileSync(`${root}/src/i18n/locales/en/home.json`, 'utf8'));
const viCourses = JSON.parse(fs.readFileSync(`${root}/src/i18n/locales/vi/courses.json`, 'utf8'));
const enCourses = JSON.parse(fs.readFileSync(`${root}/src/i18n/locales/en/courses.json`, 'utf8'));

const requiredHomeKeys = ['pythonFoundation', 'heroCta', 'stats', 'learningPaths', 'steps', 'cta'];
for (const key of requiredHomeKeys) {
  if (!viHome[key] || !enHome[key]) report.validationErrors.push(`missing home key: ${key}`);
}

for (const data of [viCourses, enCourses]) {
  if (!data.contentStatus?.completed) report.validationErrors.push('missing courses.contentStatus.completed');
  if (!data.courseDetail?.completedTitle) report.validationErrors.push('missing courses.courseDetail.completedTitle');
  if (!data.coursePage?.stats?.completed) report.validationErrors.push('missing courses.coursePage.stats.completed');
}

const coursesSrc = fs.readFileSync(`${root}/src/data/courses.js`, 'utf8');
if (!coursesSrc.includes('contentStatus: COURSE_CONTENT_STATUS.completed')) report.validationErrors.push('python-foundation contentStatus not marked completed');
if (!coursesSrc.includes('curriculumVersion: "1.0"')) report.validationErrors.push('python-foundation curriculumVersion missing');

report.status = report.validationErrors.length ? 'failed' : 'passed';
fs.writeFileSync(`${root}/validation_report.json`, JSON.stringify(report, null, 2));
if (report.validationErrors.length) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}
console.log(JSON.stringify(report, null, 2));
