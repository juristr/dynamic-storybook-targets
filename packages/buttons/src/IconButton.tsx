import React from "react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  icon: React.ReactNode;
  label: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  label,
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-full flex items-center justify-center transition-colors";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
  };
  const sizeStyles = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        className || ""
      }`}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
