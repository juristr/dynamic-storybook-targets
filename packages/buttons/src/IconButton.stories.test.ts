import { test, expect } from "@storybook/test";
import { within, userEvent } from "@storybook/testing-library";

test("IconButton click interaction", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test that the icon button is present and clickable
  const iconButton = canvas.getByRole("button");
  await expect(iconButton).toBeInTheDocument();
  await userEvent.click(iconButton);

  // Test that disabled icon button cannot be clicked
  const disabledButton = canvas.getByLabelText("Disabled Icon Button");
  await expect(disabledButton).toBeDisabled();
});

test("IconButton variants render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test Primary IconButton styling
  const primaryButton = canvas.getByLabelText("Primary Icon Button");
  await expect(primaryButton).toHaveClass(/bg-blue-500/);

  // Test Secondary IconButton styling
  const secondaryButton = canvas.getByLabelText("Secondary Icon Button");
  await expect(secondaryButton).toHaveClass(/bg-gray-500/);

  // Test Outline IconButton styling
  const outlineButton = canvas.getByLabelText("Outline Icon Button");
  await expect(outlineButton).toHaveClass(/border/);
});

test("IconButton sizes render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test Small IconButton
  const smallButton = canvas.getByLabelText("Small Icon Button");
  await expect(smallButton).toHaveClass(/p-1/);

  // Test Large IconButton
  const largeButton = canvas.getByLabelText("Large Icon Button");
  await expect(largeButton).toHaveClass(/p-3/);
});
