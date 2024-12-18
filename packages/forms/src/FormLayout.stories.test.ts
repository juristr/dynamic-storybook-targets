import { test, expect } from "@storybook/test";
import { within } from "@storybook/testing-library";

test("FormLayout renders correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test form container
  const form = canvas.getByRole("form");
  await expect(form).toBeInTheDocument();

  // Test form structure
  const formGroups = canvas.getAllByRole("group");
  await expect(formGroups.length).toBeGreaterThan(0);
});

test("FormLayout spacing and alignment", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test vertical spacing
  const form = canvas.getByRole("form");
  await expect(form).toHaveClass(/space-y-4/);

  // Test form groups alignment
  const formGroups = canvas.getAllByRole("group");
  formGroups.forEach(async (group) => {
    await expect(group).toHaveClass(/flex/);
  });
});
