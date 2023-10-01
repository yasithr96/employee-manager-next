import * as React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href="/employee/list">
        <Button variant="outlined">View Employee Data</Button>
      </Link>
      <div className="empty" style={{ height: 400 }}></div>
    </div>
  );
}
