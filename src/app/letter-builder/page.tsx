"use client";

import { useState } from "react";

export default function LetterBuilderPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Editor */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
        "
      >
        <h1 className="mb-6 text-3xl font-bold text-white">
          Application Letter Builder
        </h1>

        <div className="space-y-4">
          <input
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            placeholder="Full Name"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-black
            "
          />

          <input
            value={company}
            onChange={(e) =>
              setCompany(e.target.value)
            }
            placeholder="Company Name"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-black
            "
          />

          <input
            value={position}
            onChange={(e) =>
              setPosition(e.target.value)
            }
            placeholder="Position Applying For"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-black
            "
          />

          <textarea
            rows={10}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="Write your application letter..."
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-black
            "
          />

          <button
            className="
              w-full
              rounded-xl
              bg-red-600
              py-4
              text-white
            "
          >
            Save Letter
          </button>
        </div>
      </div>

      {/* Preview */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white
          p-8
          text-black
        "
      >
        <p>{fullName || "Your Name"}</p>

        <br />

        <p>
          Hiring Manager
          <br />
          {company || "Company Name"}
        </p>

        <br />

        <p>
          Subject: Application for{" "}
          {position || "Position"}
        </p>

        <br />

        <p>
          {content ||
            "Your application letter preview will appear here."}
        </p>

        <br />

        <p>
          Sincerely,
          <br />
          {fullName || "Your Name"}
        </p>
      </div>
    </div>
  );
}