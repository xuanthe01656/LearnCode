import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Code2,
  FileText,
  HelpCircle,
  Lightbulb,
  Monitor,
  Printer,
  Target,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CodeBlock from "../../components/CodeBlock.jsx";
import { getCourseById } from "../../data/courses.js";
import { getLessonById } from "../../data/lessons.js";
import { getTeacherAdjacentLessons, getTeacherLessonGuide } from "../../data/teacherGuides.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}

function Section({ eyebrow, icon, title, children, className = "" }) {
  return (
    <section className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm print:break-inside-avoid ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
          {icon}
        </div>
        <div>
          {eyebrow && <div className="text-xs font-black uppercase tracking-wide text-slate-400">{eyebrow}</div>}
          <h2 className="text-xl font-black text-slate-950">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Checklist({ items, tone = "slate" }) {
  const list = asArray(items);
  if (!list.length) return null;
  const iconColor = tone === "emerald" ? "text-emerald-600" : tone === "amber" ? "text-amber-600" : tone === "red" ? "text-red-600" : "text-indigo-600";
  return (
    <div className="grid gap-3">
      {list.map((item, index) => (
        <div key={`${String(item)}-${index}`} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          <CheckCircle2 className={`mt-0.5 shrink-0 ${iconColor}`} size={17} />
          <span>{typeof item === "string" ? item : JSON.stringify(item)}</span>
        </div>
      ))}
    </div>
  );
}

function FlowCard({ step, index, t }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-black text-white">{index + 1}</div>
          <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-indigo-700 ring-1 ring-indigo-100">
          {t("teacher:ui.minutes", { count: step.minutes || 0 })}
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-sm font-black text-slate-800">{t("teacher:ui.teacherActions")}</h4>
          <Checklist items={step.teacherActions} />
        </div>
        <div>
          <h4 className="mb-2 text-sm font-black text-slate-800">{t("teacher:ui.learnerActions")}</h4>
          <Checklist items={step.learnerActions} tone="emerald" />
        </div>
      </div>
      {step.check && (
        <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
          <b>{t("teacher:ui.checkpoint")}:</b> {step.check}
        </div>
      )}
    </article>
  );
}

function QuestionGroup({ title, questions }) {
  const list = asArray(questions);
  if (!list.length) return null;
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-black text-slate-950">{title}</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
        {list.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
      </ol>
    </div>
  );
}

export default function TeacherLessonGuide() {
  const { lessonId } = useParams();
  const { t, i18n } = useTranslation(["teacher", "lessons", "courses"]);
  const lesson = getLessonById(lessonId);
  const teacherMeta = getTeacherLessonGuide(lessonId);

  if (!lesson || !teacherMeta) return <Navigate to="/teacher" replace />;

  const course = getCourseById(lesson.courseId);
  const { previousLesson, nextLesson } = getTeacherAdjacentLessons(lesson.id);
  const studentBase = `lessons:${lesson.i18nKey}`;
  const teacherBase = `teacher:${teacherMeta.i18nKey}`;
  const studentObjectives = asArray(t(`${studentBase}.objectives`, { returnObjects: true }));
  const studentQuiz = asArray(t(`${studentBase}.quiz`, { returnObjects: true }));
  const studentProject = asObject(t(`${studentBase}.project`, { returnObjects: true }));
  const codeExercise = asObject(t(`${studentBase}.codeExercise`, { returnObjects: true }));
  const guide = asObject(t(teacherBase, { returnObjects: true })) || {};
  const beforeClass = asObject(guide.beforeClass) || {};
  const hook = asObject(guide.hook) || {};
  const liveCoding = asObject(guide.liveCoding) || {};
  const questions = asObject(guide.questions) || {};
  const homework = asObject(guide.homework) || {};
  const assessment = asObject(guide.assessment) || {};
  const differentiation = asObject(guide.differentiation) || {};
  const solution = asObject(guide.solution) || {};
  const flow = asArray(guide.flow);
  const activities = asArray(guide.activities);
  const teachingScript = asArray(guide.teachingScript);
  const testCases = asArray(codeExercise?.testCases);

  const printGuide = () => window.print();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="mb-5 flex flex-wrap gap-3 no-print">
          <Link to={course ? `/teacher/course/${course.id}` : "/teacher"} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50">
            <ArrowLeft size={16} />
            {t("teacher:ui.backToTeacherDashboard")}
          </Link>
          <Link to={`/lessons/${lesson.id}`} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50">
            <BookOpen size={16} />
            {t("teacher:ui.openStudentLesson")}
          </Link>
          <button type="button" onClick={printGuide} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-sm hover:bg-slate-800">
            <Printer size={16} />
            {t("teacher:ui.print")}
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl print:bg-white print:text-slate-950 print:shadow-none">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-80 print:hidden" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur print:border-slate-200 print:bg-slate-50">
                    {t("teacher:ui.lessonNumber", { order: lesson.order })}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur print:border-slate-200 print:bg-slate-50">
                    <Clock size={16} />
                    {t("teacher:ui.minutes", { count: lesson.durationMinutes })}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur print:border-slate-200 print:bg-slate-50">
                    {t("teacher:ui.difficulty", { level: lesson.difficulty || 1 })}
                  </span>
                  {lesson.hasCodeExercise && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur print:border-slate-200 print:bg-slate-50">
                      <Code2 size={16} />
                      {t("teacher:ui.codeExercise")}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  {guide.title || t(`${studentBase}.title`)}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82 print:text-slate-700">
                  {guide.summary || t(`${studentBase}.description`)}
                </p>
              </div>

              <aside className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur print:border-slate-200 print:bg-slate-50">
                <h2 className="font-black">{t("teacher:ui.teacherSnapshot")}</h2>
                <div className="mt-4 space-y-3 text-sm text-white/82 print:text-slate-700">
                  <div><b>{t("teacher:ui.focus")}:</b> {guide.focus}</div>
                  <div><b>{t("teacher:ui.quizCount", { count: lesson.quizQuestionCount || 0 })}</b></div>
                  <div><b>{t("teacher:ui.homeworkMinutes", { count: guide.homeworkMinutes || 30 })}</b></div>
                  <div><b>{t("teacher:ui.correctAnswer")}:</b> {lesson.requiredQuizScorePercent || 70}%+</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 lg:grid-cols-[340px_1fr]">
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start no-print">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700"><Target size={22} /></div>
            <h2 className="text-xl font-black">{t("teacher:ui.studentOutcomes")}</h2>
            <div className="mt-4"><Checklist items={studentObjectives} tone="emerald" /></div>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">{t("teacher:ui.navigation")}</h2>
            <div className="mt-4 grid gap-3">
              {previousLesson && <Link to={`/teacher/lessons/${previousLesson.lessonId}`} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">← {t("teacher:ui.previousGuide")}</Link>}
              {nextLesson && <Link to={`/teacher/lessons/${nextLesson.lessonId}`} className="rounded-2xl bg-indigo-600 px-4 py-3 text-center text-sm font-black text-white hover:bg-indigo-700">{t("teacher:ui.nextGuide")} →</Link>}
            </div>
          </section>
        </aside>

        <main className="space-y-6">
          <Section eyebrow={t("teacher:ui.beforeClassEyebrow")} icon={<Monitor size={20} />} title={t("teacher:ui.beforeClass")}>
            <div className="grid gap-5 md:grid-cols-2">
              <div><h3 className="mb-3 font-black">{t("teacher:ui.materials")}</h3><Checklist items={beforeClass.materials} /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.teacherChecklist")}</h3><Checklist items={beforeClass.checklist} tone="emerald" /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.onlineSetup")}</h3><Checklist items={beforeClass.onlineSetup} /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.offlineSetup")}</h3><Checklist items={beforeClass.offlineSetup} /></div>
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.openingEyebrow")} icon={<Lightbulb size={20} />} title={hook.title || t("teacher:ui.hook")}>
            {hook.story && <p className="rounded-3xl bg-amber-50 p-5 text-base font-semibold leading-8 text-amber-900">{hook.story}</p>}
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div><h3 className="mb-3 font-black">{t("teacher:ui.askLearners")}</h3><Checklist items={hook.prompts} /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.expectedResponses")}</h3><Checklist items={hook.expectedResponses} tone="emerald" /></div>
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.flowEyebrow")} icon={<Clock size={20} />} title={t("teacher:ui.teachingFlow")}>
            <div className="space-y-4">
              {flow.map((step, index) => <FlowCard key={`${step.title}-${index}`} step={step} index={index} t={t} />)}
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.scriptEyebrow")} icon={<BookOpen size={20} />} title={t("teacher:ui.teacherScript")}>
            <div className="grid gap-4">
              {teachingScript.map((item, index) => (
                <article key={`${item.say}-${index}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 text-sm font-black text-slate-400">#{index + 1}</div>
                  {item.say && <p className="text-base leading-8 text-slate-800"><b>{t("teacher:ui.say")}:</b> {item.say}</p>}
                  {item.demo && <p className="mt-2 text-sm leading-6 text-slate-600"><b>{t("teacher:ui.demo")}:</b> {item.demo}</p>}
                  {item.ask && <p className="mt-2 text-sm leading-6 text-indigo-700"><b>{t("teacher:ui.ask")}:</b> {item.ask}</p>}
                </article>
              ))}
            </div>
          </Section>

          {liveCoding.enabled && (
            <Section eyebrow={t("teacher:ui.codeEyebrow")} icon={<Code2 size={20} />} title={t("teacher:ui.codeExerciseForTeacher")}>
              <h3 className="mb-3 font-black text-slate-950">{liveCoding.title}</h3>
              <Checklist items={liveCoding.steps} />
              {codeExercise?.starterCode && (
                <div className="mt-5">
                  <CodeBlock code={codeExercise.starterCode} language={codeExercise.language || "python"} title="Starter code" />
                </div>
              )}
              {solution.code && (
                <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="mb-3 font-black text-amber-950">{t("teacher:ui.teacherOnlySolution")}</h3>
                  <CodeBlock code={solution.code} language={codeExercise?.language || "python"} title={t("teacher:ui.referenceSolution")} />
                  <Checklist items={solution.notes} tone="amber" />
                </div>
              )}
              {testCases.length > 0 && (
                <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-black text-slate-950">{t("teacher:ui.autoTestCases")}</h3>
                  <div className="mt-4 grid gap-3">
                    {testCases.map((testCase, index) => (
                      <div key={`${testCase.name}-${index}`} className="rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-slate-100">
                        <div className="font-black text-slate-900">{t("teacher:ui.testCase", { index: index + 1 })}: {testCase.name}</div>
                        <pre className="mt-2 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-100">stdin: {JSON.stringify(testCase.stdin || "")}\nexpected: {testCase.expectedOutput}</pre>
                        {testCase.hint && <div className="mt-2 text-slate-600">{testCase.hint}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div><h3 className="mb-3 font-black">{t("teacher:ui.triggerMistakes")}</h3><Checklist items={liveCoding.mistakesToTrigger} tone="red" /></div>
                <div><h3 className="mb-3 font-black">{t("teacher:ui.debrief")}</h3><Checklist items={liveCoding.debrief} tone="emerald" /></div>
              </div>
            </Section>
          )}

          <Section eyebrow={t("teacher:ui.activitiesEyebrow")} icon={<Users size={20} />} title={t("teacher:ui.classActivities")}>
            <div className="grid gap-4 md:grid-cols-2">
              {activities.map((activity, index) => (
                <article key={`${activity.title}-${index}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-xs font-black uppercase text-slate-400">{activity.mode || t("teacher:ui.mode")}</div>
                  <h3 className="font-black text-slate-950">{activity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{activity.description}</p>
                  <div className="mt-4"><Checklist items={activity.steps} /></div>
                  {activity.successCriteria && <p className="mt-3 rounded-2xl bg-emerald-50 p-3 text-sm font-semibold leading-6 text-emerald-800"><b>{t("teacher:ui.successCriteria")}:</b> {activity.successCriteria}</p>}
                </article>
              ))}
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.questionsEyebrow")} icon={<HelpCircle size={20} />} title={t("teacher:ui.questionBank")}>
            <div className="grid gap-4 md:grid-cols-3">
              <QuestionGroup title={t("teacher:ui.warmupQuestions")} questions={questions.warmup} />
              <QuestionGroup title={t("teacher:ui.duringQuestions")} questions={questions.during} />
              <QuestionGroup title={t("teacher:ui.exitQuestions")} questions={questions.exitTicket} />
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.homeworkEyebrow")} icon={<FileText size={20} />} title={t("teacher:ui.homeworkAndAssignments")}>
            <div className="grid gap-5 md:grid-cols-3">
              <div><h3 className="mb-3 font-black">{t("teacher:ui.requiredHomework")}</h3><Checklist items={homework.required} tone="emerald" /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.optionalChallenge")}</h3><Checklist items={homework.optional} tone="amber" /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.submissionFormat")}</h3><Checklist items={homework.submissionFormat} /></div>
            </div>
            {studentProject?.title && (
              <div className="mt-5 rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="font-black text-emerald-950">{studentProject.title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900/80">{studentProject.description}</p>
                <div className="mt-4"><Checklist items={studentProject.checklist} tone="emerald" /></div>
              </div>
            )}
          </Section>

          <Section eyebrow={t("teacher:ui.assessmentEyebrow")} icon={<ClipboardCheck size={20} />} title={t("teacher:ui.assessmentRubric")}>
            <div className="overflow-x-auto rounded-3xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-black">{t("teacher:ui.rubricLabels.criterion")}</th>
                    <th className="px-4 py-3 font-black">{t("teacher:ui.rubricLabels.excellent")}</th>
                    <th className="px-4 py-3 font-black">{t("teacher:ui.rubricLabels.good")}</th>
                    <th className="px-4 py-3 font-black">{t("teacher:ui.rubricLabels.needsWork")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {asArray(assessment.rubric).map((row, index) => (
                    <tr key={`${row.criterion}-${index}`}>
                      <td className="px-4 py-3 font-bold text-slate-900">{row.criterion}</td>
                      <td className="px-4 py-3 text-slate-700">{row.excellent}</td>
                      <td className="px-4 py-3 text-slate-700">{row.good}</td>
                      <td className="px-4 py-3 text-slate-700">{row.needsWork}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div><h3 className="mb-3 font-black">{t("teacher:ui.commonMistakes")}</h3><Checklist items={guide.commonMisconceptions} tone="red" /></div>
              <div><h3 className="mb-3 font-black">{t("teacher:ui.differentiation")}</h3><Checklist items={[...(asArray(differentiation.support)), ...(asArray(differentiation.extend))]} tone="emerald" /></div>
            </div>
          </Section>

          <Section eyebrow={t("teacher:ui.answerKeyEyebrow")} icon={<AlertTriangle size={20} />} title={t("teacher:ui.quizAnswerKey")} className="border-amber-200 bg-amber-50">
            <div className="grid gap-3">
              {studentQuiz.map((item, index) => (
                <article key={`${item.question}-${index}`} className="rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-amber-100">
                  <h3 className="font-black text-slate-950">{t("teacher:ui.quizQuestion", { index: index + 1 })}: {item.question}</h3>
                  <p className="mt-2 text-amber-900"><b>{t("teacher:ui.correctAnswer")}:</b> {item.answerKey}. {item.options?.[item.answerKey]}</p>
                  {item.explain && <p className="mt-2 text-slate-600">{item.explain}</p>}
                </article>
              ))}
            </div>
          </Section>
        </main>
      </section>
    </div>
  );
}
