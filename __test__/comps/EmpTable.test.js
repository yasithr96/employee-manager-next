import React from "react";
import { render, screen } from "@testing-library/react";
import EmpTable from "@/comps/EmpTable";

const mockEmployees = [
  {
    _id: "1",
    firstName: "marcuse",
    lastName: "Johnson",
    email: "marcuseJohnson@example.com",
    phoneNumber: "+94710909091",
    gender: "M",
    photo: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

test("renders EmpTable with employee data", () => {
  render(
    <EmpTable
      employees={mockEmployees}
      updateEmployee={() => {}}
      deleteEmp={() => {}}
    />
  );

  // Check if employee data is rendered correctly
  expect(screen.getByText("marcuse")).toBeInTheDocument();
  expect(screen.getByText("Johnson")).toBeInTheDocument();
  expect(screen.getByText("marcuseJohnson@example.com")).toBeInTheDocument();
  expect(screen.getByText("+94710909091")).toBeInTheDocument();
  expect(screen.getByText("Male")).toBeInTheDocument();
});
