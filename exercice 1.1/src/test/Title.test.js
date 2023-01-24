import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Title from "../components/Title";

describe("Title test", () => {
  it("Should show title", () => {
    render(
      <Title title='Testing'>
        <h2>React</h2>
      </Title>
    );
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
