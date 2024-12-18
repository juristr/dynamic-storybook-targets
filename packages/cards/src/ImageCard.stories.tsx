import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard } from "./ImageCard";

const meta = {
  title: "Components/ImageCard",
  component: ImageCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imagePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = "https://picsum.photos/800/400";

export const TopImage: Story = {
  args: {
    imageUrl: sampleImage,
    imageAlt: "Sample image",
    title: "Card with Top Image",
    children: <p>This card has an image at the top.</p>,
  },
};

export const BottomImage: Story = {
  args: {
    imageUrl: sampleImage,
    imageAlt: "Sample image",
    imagePosition: "bottom",
    title: "Card with Bottom Image",
    children: <p>This card has an image at the bottom.</p>,
  },
};

export const WithSubtitle: Story = {
  args: {
    imageUrl: sampleImage,
    imageAlt: "Sample image",
    title: "Card Title",
    subtitle: "Card Subtitle",
    children: <p>This card has both a title and subtitle with an image.</p>,
  },
};

export const ComplexContent: Story = {
  args: {
    imageUrl: sampleImage,
    imageAlt: "Sample image",
    title: "Complex Card",
    subtitle: "With multiple content elements",
    children: (
      <div className="space-y-4">
        <p>This card demonstrates more complex content structure.</p>
        <ul className="list-disc list-inside">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Call to Action
        </button>
      </div>
    ),
  },
};
