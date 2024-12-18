import { test, expect } from "@storybook/test";
import { within } from "@storybook/testing-library";

test("Card renders correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test default card
  const card = canvas.getByRole("article");
  await expect(card).toBeInTheDocument();
  await expect(card).toHaveClass(/rounded-lg/);

  // Test card content
  const title = canvas.getByText("Default Card");
  await expect(title).toBeInTheDocument();
});

test("Card variants render correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test elevated card
  const elevatedCard = canvas.getByRole("article");
  await expect(elevatedCard).toHaveClass(/shadow-lg/);

  // Test bordered card
  const borderedCard = canvas.getByRole("article");
  await expect(borderedCard).toHaveClass(/border/);
});
