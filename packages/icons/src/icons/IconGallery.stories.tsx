import React from "react";
import type { Meta } from "@storybook/react";
import { Search } from "./Search";
import { ChevronDown } from "./ChevronDown";

const meta = {
  title: "Components/IconGallery",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Gallery = () => {
  const icons = [
    { name: "Search", component: <Search /> },
    { name: "ChevronDown", component: <ChevronDown /> },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Icon Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {icons.map(({ name, component }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="w-8 h-8 flex items-center justify-center mb-2">
              {component}
            </div>
            <span className="text-sm text-gray-600">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
