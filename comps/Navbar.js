import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <h1>EmployeeManager</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
