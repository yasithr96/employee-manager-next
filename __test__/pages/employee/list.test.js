import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "@/pages/employee/list";
import { EmployeeContext } from "../../../context/EmployeeContext";

describe("Employee List Page", () => {
  it("Should render properly", () => {
    EmployeeContext._currentValue = {
      setEmployeeData: jest.fn(),
    };
    render(<List />);

    const header = screen.getByRole("heading");
    const headerText = "Employees";

    expect(header).toHaveTextContent(headerText);
  });
});
