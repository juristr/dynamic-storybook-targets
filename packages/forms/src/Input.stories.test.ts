import { test, expect } from "@storybook/test";
import { within, userEvent } from "@storybook/testing-library";

test("Input renders and handles user interaction", async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  // Test input presence and type
  const input = canvas.getByRole("textbox");
  await expect(input).toBeInTheDocument();

  // Test input interaction
  await userEvent.type(input, "Test input");
  await expect(input).toHaveValue("Test input");
});

test("Input variants render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test error state
  const errorInput = canvas.getByRole("textbox");
  await expect(errorInput).toHaveClass(/border-red-500/);

  // Test disabled state
  const disabledInput = canvas.getByRole("textbox");
  await expect(disabledInput).toBeDisabled();

  // Test with label
  const inputWithLabel = canvas.getByLabelText("Input Label");
  await expect(inputWithLabel).toBeInTheDocument();
});
