import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListHeader from "@/comps/ListHeader";

test("renders ListHeader with the correct elements", () => {
  const handleChange = jest.fn(); // Mock function

  render(<ListHeader handleChange={handleChange} view="module" />);

  // Check if the header text is rendered
  expect(screen.getByText("Employees")).toBeInTheDocument();

  // Check if "Add Employee" button is rendered
  const addEmployeeButton = screen.getByText("Add Employee");
  expect(addEmployeeButton).toBeInTheDocument();
  expect(addEmployeeButton.closest("a")).toHaveAttribute(
    "href",
    "/employee/add"
  );

  // Check if ToggleButtonGroup with ViewModuleIcon is rendered
  const toggleButtonGroup = screen.getByRole("group");
  expect(toggleButtonGroup).toBeInTheDocument();

  // Check if ViewModuleIcon is rendered within ToggleButtonGroup
  const viewModuleIcon = screen.getByLabelText("module");
  expect(viewModuleIcon).toBeInTheDocument();
});

test("calls handleChange when ToggleButtonGroup is clicked", () => {
  const handleChange = jest.fn();

  render(<ListHeader handleChange={handleChange} view="module" />);

  // Click the ToggleButtonGroup
  fireEvent.click(screen.getByLabelText("module"));

  // Check if handleChange is called
  expect(handleChange).toHaveBeenCalled();
});
