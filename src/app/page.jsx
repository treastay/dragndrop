"use client";
import { useState } from "react";
import Editor from "../components/Editor";
import TemplateRenderer from "../components/templaterenderer";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState("business"); // Default template

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Drag & Drop Website Builder
      </h1>

      {/* Template Selection Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded transition ${
            selectedTemplate === "business"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedTemplate("business")}
        >
          Business Template
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            selectedTemplate === "portfolio"
              ? "bg-purple-700 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedTemplate("portfolio")}
        >
          Portfolio Template
        </button>
      </div>

      {/* Render Selected Template */}
      <div className="border rounded-lg shadow-lg p-4 bg-white">
        <TemplateRenderer templateId={selectedTemplate} />
      </div>

      {/* Website Editor Below */}
      <div className="mt-8">
        <Editor />
      </div>
    </main>
  );
}
