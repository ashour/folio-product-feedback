"use client";

export default function Form() {
  return (
    <form>
      <label
        htmlFor="title"
        className="mb-1 block cursor-pointer text-body-2 font-bold text-slate-600"
      >
        Feedback Title
      </label>
      <p className="mb-4 text-body-2 text-slate-500">
        Add a short, descriptive headline
      </p>
      <input
        type="text"
        id="title"
        name="title"
        className="rounded-5px text-body-2/1 mb-6 block w-full bg-slate-50 px-6 py-3  text-slate-600 focus:outline-none focus:ring-[1px] focus:ring-blue"
      />

      <label
        htmlFor="category"
        className="mb-1 block cursor-pointer text-body-2 font-bold text-slate-600"
      >
        Category
      </label>
      <p className="mb-4 text-body-2 text-slate-500">
        Choose a category for your feedback
      </p>
    </form>
  );
}
