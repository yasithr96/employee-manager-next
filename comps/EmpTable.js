import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const EmpTable = ({ employees, updateEmployee, deleteEmp }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((employee) => (
            <TableRow
              key={employee?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Avatar alt="Remy Sharp" src={employee?.photo} />
              </TableCell>
              <TableCell component="th" scope="row">
                {employee?.firstName}
              </TableCell>

              <TableCell>{employee?.lastName}</TableCell>
              <TableCell>{employee?.email}</TableCell>
              <TableCell>{employee?.phoneNumber}</TableCell>
              <TableCell>
                {employee?.gender === "M" ? "Male" : "Female"}
              </TableCell>
              <TableCell>
                <Link href={"/employee/edit/" + employee?._id}>
                  <IconButton onClick={() => updateEmployee(employee)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </Link>

                <IconButton onClick={() => deleteEmp(employee?._id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmpTable;
