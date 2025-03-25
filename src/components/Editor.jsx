import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import templates from "@/data/templates"; 
import ReactDOMServer from "react-dom/server"; 
import elements from "@/components/elements";

export default function DragDropBuilder() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = grapesjs.init({
        container: "#editor",
        height: "100vh",
        width: "100%",
        storageManager: false,
      });
    }
  }, []);

  useEffect(() => {
    const editor = editorRef.current;
    const blockManager = editor.BlockManager;
    
    elements.forEach(element => {
      blockManager.add(element.id, {
        label: element.name,
        content: element.content,
      });
    });
  }, []);

  const loadTemplate = (templateKey) => {
    const editor = editorRef.current;
    if (!editor) return;

    const TemplateComponent = templates[templateKey];

    if (!TemplateComponent) {
      console.error("Template not found:", templateKey);
      return;
    }

    // Convert React Component to HTML String
    const htmlString = ReactDOMServer.renderToStaticMarkup(<TemplateComponent />);

    // Inject the HTML into GrapesJS
    editor.DomComponents.clear(); // Clear previous content
    editor.setComponents(htmlString); // Load the new HTML
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white text-center p-4 font-bold text-lg shadow">
        Drag & Drop Website Builder
      </header>

      {/* Template Selection */}
      <div className="p-4 flex gap-4 justify-center">
        {Object.keys(templates).map((key) => (
          <button
            key={key}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-900 transition"
            onClick={() => loadTemplate(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)} Template
          </button>
        ))}
      </div>

      {/* GrapesJS Editor Canvas */}
      <div className="flex-1 bg-white border-t">
        <div id="editor"></div>
      </div>
    </div>
  );
}
