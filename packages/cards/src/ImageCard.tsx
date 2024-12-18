import React from "react";

export interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  imagePosition?: "top" | "bottom";
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  children,
  className = "",
  imagePosition = "top",
}) => {
  const ImageComponent = (
    <div className="relative h-48">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md ${className}`}
    >
      {imagePosition === "top" && ImageComponent}

      <div className="p-4">
        {title && <h3 className="text-xl font-semibold">{title}</h3>}
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        <div className="mt-4">{children}</div>
      </div>

      {imagePosition === "bottom" && ImageComponent}
    </div>
  );
};

export default ImageCard;
