import React from "react";
import templates from "../data/templates";

const TemplateRenderer = ({ templateId }) => {
  const SelectedTemplate = templates[templateId];

  if (!SelectedTemplate) {
    return <p className="text-center text-red-500">Template not found</p>;
  }

  return <SelectedTemplate />;
};

export default TemplateRenderer;
