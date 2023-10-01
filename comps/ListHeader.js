import Link from "next/link";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ListHeader = ({ handleChange, view }) => {
  return (
    <div
      className="headercomp"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Employees</h1>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          sx={{ width: 200, padding: 1, margin: 2, height: 50 }}
        >
          <Link href="/employee/add">Add Employee</Link>
        </Button>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          color="primary"
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

export default ListHeader;
