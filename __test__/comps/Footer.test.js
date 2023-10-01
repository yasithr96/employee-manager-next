import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/comps/Footer";

describe("Footer Component", () => {
  it("Footer Should render properly", () => {
    render(<Footer />);

    const copyrightElement = screen.getByText("© 2023 Employee Manager");
    expect(copyrightElement).toBeInTheDocument();
  });
});
