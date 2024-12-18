import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    elevation: {
      control: "select",
      options: ["none", "low", "medium", "high"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <p>This is a basic card with some content.</p>,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Card Title",
    children: <p>This is a card with a title.</p>,
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    children: <p>This is a card with both a title and subtitle.</p>,
  },
};

export const HighElevation: Story = {
  args: {
    title: "High Elevation Card",
    elevation: "high",
    children: <p>This card has high elevation.</p>,
  },
};

export const NoElevation: Story = {
  args: {
    title: "No Elevation Card",
    elevation: "none",
    children: <p>This card has no elevation.</p>,
  },
};
