"use client";
export default function AskLawyerBtn() {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-8 py-3 text-white rounded-md text-lg "
        style={{ backgroundColor: "rgba(250, 92, 24, 1)" }}
      >
        استشير محامي
      </button>
    </div>
  );
}
