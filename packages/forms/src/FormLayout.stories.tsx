import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormLayout, FormSection } from "./FormLayout";
import { Input } from "./Input";

const meta = {
  title: "Components/FormLayout",
  component: FormLayout,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["stack", "grid", "inline"],
    },
  },
} satisfies Meta<typeof FormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stack: Story = {
  args: {
    variant: "stack",
    children: (
      <>
        <Input label="First Name" placeholder="John" />
        <Input label="Last Name" placeholder="Doe" />
        <Input label="Email" type="email" placeholder="john@example.com" />
      </>
    ),
  },
};

export const Grid: Story = {
  args: {
    variant: "grid",
    children: (
      <>
        <Input label="First Name" placeholder="John" />
        <Input label="Last Name" placeholder="Doe" />
        <Input label="Email" type="email" placeholder="john@example.com" />
        <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
      </>
    ),
  },
};

export const Inline: Story = {
  args: {
    variant: "inline",
    children: (
      <>
        <Input label="Search" placeholder="Search..." />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </>
    ),
  },
};

export const WithSections: Story = {
  args: {
    variant: "stack",
    children: (
      <>
        <FormSection
          title="Personal Information"
          description="Please enter your personal details"
        >
          <Input label="First Name" placeholder="John" />
          <Input label="Last Name" placeholder="Doe" />
        </FormSection>

        <FormSection
          title="Contact Information"
          description="How can we reach you?"
        >
          <Input label="Email" type="email" placeholder="john@example.com" />
          <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
        </FormSection>
      </>
    ),
  },
};
