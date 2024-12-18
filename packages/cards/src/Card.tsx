import React from "react";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  elevation?: "none" | "low" | "medium" | "high";
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = "",
  elevation = "low",
}) => {
  const elevationStyles = {
    none: "",
    low: "shadow-sm",
    medium: "shadow-md",
    high: "shadow-lg",
  };

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden ${elevationStyles[elevation]} ${className}`}
    >
      {(title || subtitle) && (
        <div className="p-4 border-b">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
