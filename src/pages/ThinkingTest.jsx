import React, { useEffect, useMemo, useState } from "react";
import { Brain, CheckCircle2, RotateCcw, Trophy } from "lucide-react";
import { QUESTIONS } from "../data/questions.js";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
function getGradeNumber(gradeText) {
  return Number(gradeText.replace("Lớp ", ""));
}

function getQuestionMaxLevel(levelText) {
  const numbers = levelText.match(/\d+/g).map(Number);
  return Math.max(...numbers);
}
function getResult(score) {
  if (score >= 8) return { title: "Rất phù hợp để học Python ngay", desc: "Tư duy logic, đọc đề và suy luận khá tốt. Có thể bắt đầu Python cơ bản kết hợp mini project.", badge: "Nhóm A" };
  if (score >= 5) return { title: "Có tiềm năng, nên học theo hướng chậm và nhiều ví dụ", desc: "Nên bổ sung thêm tư duy điều kiện, vòng lặp và chia nhỏ vấn đề trong 2–4 tuần.", badge: "Nhóm B" };
  return { title: "Nên làm quen tư duy lập trình trước", desc: "Nên bắt đầu bằng Scratch, trò chơi logic, thuật toán đời thường rồi mới chuyển sang Python.", badge: "Nhóm C" };
}

export default function ThinkingTest() {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("Lớp 8");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [formError, setFormError] = useState("");

  const testQuestions = useMemo(() => {
    const selectedGrade = getGradeNumber(grade);
  
    let baseQuestions;
    let challengeQuestions;
  
    if (selectedGrade === 12) {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 10
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 10
      );
    } else if (selectedGrade >= 10) {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 8
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) > selectedGrade
      );
    } else {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) <= selectedGrade
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) > selectedGrade
      );
    }
  
    const selectedBase = shuffle(baseQuestions).slice(0, 8);
    const selectedBaseIds = selectedBase.map((q) => q.id);
    const uniqueChallengeQuestions = challengeQuestions.filter(
      (q) => !selectedBaseIds.includes(q.id)
    );
    const selectedChallenge = shuffle(uniqueChallengeQuestions).slice(0, 2);
    return [
      ...selectedBase,
      ...selectedChallenge,
    ];
  }, [testId, grade]);
  const answeredCount = Object.keys(answers).length;
  const score = testQuestions.reduce((total, q) => total + (answers[q.id] === q.answer ? 1 : 0), 0);
  const result = getResult(score);
  const handleStart = () => {
    if (!studentName.trim()) {
      setFormError("Vui lòng nhập tên học sinh.");
      return;
    }
  
    setFormError("");
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(15 * 60);
    setTestId((v) => v + 1);
    setStarted(true);
  };
  useEffect(() => {
    if (!started || submitted) return;
  
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
  
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [started, submitted, timeLeft]);
  const restart = () => {
    setAnswers({});
    setSubmitted(false);
    setStarted(false);
    setTimeLeft(15 * 60);
    setFormError("");
    setTestId((v) => v + 1);
  };
  const handlePrintResult = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <Brain size={16} /> Test tư duy lập trình
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Kiểm tra tư duy học Python</h1>
              <p className="mt-2 max-w-2xl text-white/90">Ngân hàng 50 câu hỏi cho học sinh lớp 6–12. Mỗi lượt random 10 câu để đánh giá logic, điều kiện, vòng lặp, debug và chia nhỏ vấn đề.</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
              <div className="text-4xl font-bold">10</div>
              <div className="text-sm text-white/80">câu mỗi lượt</div>
            </div>
          </div>
        </div>
        {formError && (
          <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {formError}
          </div>
        )}
        {!started ? (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold">Thông tin học sinh</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Tên học sinh</span>
                <input value={studentName} onChange={(e) => setStudentName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" placeholder="Ví dụ: Nguyễn Văn An" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Khối lớp</span>
                <select value={grade} onChange={(e) => setGrade(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                  {Array.from({ length: 7 }, (_, i) => `Lớp ${i + 6}`).map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
            <button onClick={handleStart} className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-700">Bắt đầu làm bài</button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{studentName || "Học sinh"} · {grade}</div>
                <div className="text-sm text-slate-500">Đã trả lời {answeredCount}/10 câu</div>
                <div className={`text-sm font-semibold ${timeLeft <= 60 ? "text-red-600" : "text-indigo-600"}`}>
                  Thời gian còn lại: {formatTime(timeLeft)}
                </div>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200 md:w-72">
                <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${answeredCount * 10}%` }} />
              </div>
            </div>

            <div className="space-y-4">
              {testQuestions.map((q, index) => {
                const isCorrect = answers[q.id] === q.answer;
                return (
                  <div key={q.id} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">Câu {index + 1}</span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">{q.level}</span>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">{q.type}</span>
                    </div>
                    <h3 className="text-lg font-bold">{q.question}</h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {q.options.map((option) => {
                        const selected = answers[q.id] === option;
                        const showCorrect = submitted && option === q.answer;
                        const showWrong = submitted && selected && option !== q.answer;
                        return (
                          <button key={option} disabled={submitted} onClick={() => setAnswers({ ...answers, [q.id]: option })} className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"} ${showCorrect ? "border-green-500 bg-green-50" : ""} ${showWrong ? "border-red-500 bg-red-50" : ""}`}>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div className={`mt-4 rounded-2xl p-4 text-sm ${isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                        <b>{isCorrect ? "Đúng." : "Sai."}</b> {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!submitted ? (
              <button disabled={answeredCount < 10} onClick={() => setSubmitted(true)} className="mt-6 w-full rounded-2xl bg-indigo-600 px-6 py-4 font-bold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300">Nộp bài và xem kết quả</button>
            ) : (
              <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="print-card">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <Trophy size={16} /> {result.badge}
                    </div>

                    <h2 className="text-2xl font-bold">Phiếu kết quả test tư duy lập trình</h2>

                    <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div><b>Học sinh:</b> {studentName}</div>
                      <div><b>Khối lớp:</b> {grade}</div>
                      <div><b>Số câu:</b> 10</div>
                      <div><b>Điểm:</b> {score}/10</div>
                      <div><b>Thời gian làm bài:</b> {formatTime(15 * 60 - timeLeft)}</div>
                      <div><b>Ngày in:</b> {new Date().toLocaleDateString("vi-VN")}</div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                      <h3 className="font-bold">{result.title}</h3>
                      <p className="mt-2 text-slate-600">{result.desc}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">
                      <div className="border-t border-slate-300 pt-2">Phụ huynh</div>
                      <div className="border-t border-slate-300 pt-2">Giáo viên</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={restart} className="no-print inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50"><RotateCcw size={18} /> Làm lượt mới</button>
                    <button onClick={handlePrintResult} className="no-print inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"> In kết quả</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
