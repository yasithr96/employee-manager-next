// Navbar.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/comps/Navbar";

test("renders Navbar with the correct title and link", () => {
  render(<Navbar />);

  // Use getByText to assert that the title is present
  const titleElement = screen.getByText("EmployeeManager");
  expect(titleElement).toBeInTheDocument();

  // Use getByRole to check that the link is present and is a link
  const linkElement = screen.getByRole("link", { name: "EmployeeManager" });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");
});
