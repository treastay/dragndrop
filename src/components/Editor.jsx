import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import templates from "@/data/templates";
import ReactDOMServer from "react-dom/server";
import { db, collection, addDoc, getDocs } from "@/data/firebaseconfig";


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

  const saveTemplateToFirebase = async () => {
    const editor = editorRef.current;
    const html = editor.getHtml();

    try {
      await addDoc(collection(db, "templates"), {
        name: "User Template", // You can make this dynamic
        content: html,
        timestamp: new Date(),
      });
      alert("Template saved to Firebase!");
    } catch (error) {
      console.error("Error saving template: ", error);
    }
  };

  const loadTemplatesFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "templates"));
    const templates = [];

    querySnapshot.forEach((doc) => {
      templates.push({ id: doc.id, ...doc.data() });
    });

    if (templates.length > 0) {
      const latestTemplate = templates[templates.length - 1]; // Load the last saved template
      const editor = editorRef.current;
      editor.DomComponents.clear();
      editor.setComponents(latestTemplate.content);
      alert("Template loaded from Firebase!");
    } else {
      alert("No templates found in Firebase!");
    }
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
  
      {/* Save/Load Buttons */}
      <div className="p-4 flex gap-4 justify-center">
        <button onClick={saveTemplateToFirebase} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">
          ☁️ Save to Cloud
        </button>
        <button onClick={loadTemplatesFromFirebase} className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
          🔄 Load from Cloud
        </button>
      </div>
    </div>
  );
}  

