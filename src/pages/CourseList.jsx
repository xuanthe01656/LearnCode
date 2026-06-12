import React from "react";
import { courses } from "../data/courses";

export default function CourseList() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Danh sách khóa học
      </h1>

      <div className="grid gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border bg-white p-5"
          >
            <h2 className="text-xl font-bold">
              {course.title}
            </h2>

            <p className="text-slate-500">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}