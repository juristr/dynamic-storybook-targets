import { test, expect } from "@storybook/test";
import { within } from "@storybook/testing-library";

test("ImageCard renders correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test image card container
  const card = canvas.getByRole("article");
  await expect(card).toBeInTheDocument();
  await expect(card).toHaveClass(/rounded-lg/);

  // Test image presence
  const image = canvas.getByRole("img");
  await expect(image).toBeInTheDocument();
  await expect(image).toHaveAttribute("alt");
});

test("ImageCard content renders correctly", async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test title and description
  const title = canvas.getByText("Image Card Title");
  const description = canvas.getByText(/This is a description/);
  await expect(title).toBeInTheDocument();
  await expect(description).toBeInTheDocument();

  // Test content layout
  const contentSection = canvas.getByRole("article");
  await expect(contentSection).toHaveClass(/p-4/);
});
