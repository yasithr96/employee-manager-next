// Home.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("renders Home component with the correct link", () => {
  render(<Home />);

  // Use getByRole to assert that the link is present
  const linkElement = screen.getByRole("link", { name: "View Employee Data" });
  expect(linkElement).toBeInTheDocument();

  const linkHref = linkElement.getAttribute("href");
  expect(linkHref).toBe("/employee/list");
});
