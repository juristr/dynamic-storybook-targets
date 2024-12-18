import { test, expect } from "@storybook/test";
import { within } from "@storybook/testing-library";

test("Icon renders correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test icon presence
  const icon = canvas.getByRole("img", { hidden: true });
  await expect(icon).toBeInTheDocument();

  // Test SVG attributes
  await expect(icon).toHaveAttribute("aria-hidden", "true");
});

test("Icon sizes render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test small icon
  const smallIcon = canvas.getByRole("img", { hidden: true });
  await expect(smallIcon).toHaveClass(/w-4 h-4/);

  // Test large icon
  const largeIcon = canvas.getByRole("img", { hidden: true });
  await expect(largeIcon).toHaveClass(/w-8 h-8/);
});

test("Icon colors apply correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test primary color
  const primaryIcon = canvas.getByRole("img", { hidden: true });
  await expect(primaryIcon).toHaveClass(/text-blue-500/);

  // Test secondary color
  const secondaryIcon = canvas.getByRole("img", { hidden: true });
  await expect(secondaryIcon).toHaveClass(/text-gray-500/);
});
