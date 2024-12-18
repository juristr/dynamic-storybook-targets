import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Search, ChevronDown } from "@design-system/icons";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchButton: Story = {
  args: {
    variant: "primary",
    icon: <Search />,
    label: "Search",
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: "secondary",
    icon: <ChevronDown />,
    label: "Show more",
  },
};

export const GhostButton: Story = {
  args: {
    variant: "ghost",
    icon: <Search />,
    label: "Search",
  },
};

export const SmallButton: Story = {
  args: {
    size: "small",
    icon: <Search />,
    label: "Search",
  },
};

export const LargeButton: Story = {
  args: {
    size: "large",
    icon: <Search />,
    label: "Search",
  },
};
