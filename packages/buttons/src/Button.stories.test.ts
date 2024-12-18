import { test, expect } from "@storybook/test";
import { within, userEvent } from "@storybook/testing-library";

test("Button click interaction", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test Primary Button
  const primaryButton = canvas.getByText("Primary Button");
  await expect(primaryButton).toBeInTheDocument();
  await userEvent.click(primaryButton);

  // Test that disabled button cannot be clicked
  const disabledButton = canvas.getByText("Disabled Button");
  await expect(disabledButton).toBeDisabled();
});

test("Button variants render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test Primary Button styling
  const primaryButton = canvas.getByText("Primary Button");
  await expect(primaryButton).toHaveClass(/bg-blue-500/);

  // Test Secondary Button styling
  const secondaryButton = canvas.getByText("Secondary Button");
  await expect(secondaryButton).toHaveClass(/bg-gray-500/);

  // Test Outline Button styling
  const outlineButton = canvas.getByText("Outline Button");
  await expect(outlineButton).toHaveClass(/border/);
});

test("Button sizes render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test Small Button
  const smallButton = canvas.getByText("Small Button");
  await expect(smallButton).toHaveClass(/px-2 py-1/);

  // Test Large Button
  const largeButton = canvas.getByText("Large Button");
  await expect(largeButton).toHaveClass(/px-6 py-3/);
});
