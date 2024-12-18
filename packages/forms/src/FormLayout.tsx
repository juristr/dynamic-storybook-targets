import React from "react";

export interface FormLayoutProps {
  children: React.ReactNode;
  variant?: "stack" | "grid" | "inline";
  className?: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  variant = "stack",
  className = "",
}) => {
  const variantStyles = {
    stack: "flex flex-col gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    inline: "flex flex-wrap gap-4 items-end",
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>{children}</div>
  );
};

export const FormSection: React.FC<{
  title: string;
  description?: string;
  children: React.ReactNode;
}> = ({ title, description, children }) => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default FormLayout;
