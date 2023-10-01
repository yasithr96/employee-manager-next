import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GridCard from "@/comps/GridCard";

const mockEmployee = {
  _id: "1",
  firstName: "marcuse",
  lastName: "Johnson",
  email: "marcuseJohnson@example.com",
  phoneNumber: "+94710909091",
  gender: "M",
  photo: "https://randomuser.me/api/portraits/men/27.jpg",
};

test("renders GridCard with employee data", () => {
  render(
    <GridCard
      employee={mockEmployee}
      updateEmployee={() => {}}
      deleteEmp={() => {}}
    />
  );

  // Check if employee data is rendered correctly
  expect(screen.getByText("marcuse Johnson")).toBeInTheDocument();
  expect(screen.getByText("marcuseJohnson@example.com")).toBeInTheDocument();
  expect(screen.getByText("+94710909091")).toBeInTheDocument();
  expect(screen.getByText("Male")).toBeInTheDocument();
});
