import * as React from "react";
import { Grid } from "@mui/material";

import Swal from "sweetalert2";

import { EmployeeContext } from "../../context/EmployeeContext";
import EmpTable from "../../comps/EmpTable";
import GridCard from "../../comps/GridCard";
import ListHeader from "../../comps/ListHeader";

const removeObjectById = (array, idToRemove) => {
  return array.filter((obj) => obj._id !== idToRemove);
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/employee/list`
  );
  const result = await response.json();

  return {
    props: {
      employeeData: result.data,
    },
  };
};

export default function List({ employeeData }) {
  const [view, setView] = React.useState("list");
  const [grid, setGrid] = React.useState(false);
  const [employees, setEmployees] = React.useState(employeeData);

  const { setEmployeeData } = React.useContext(EmployeeContext);

  const updateEmployee = (employee) => {
    setEmployeeData(employee);
  };

  const handleChange = (event, nextView) => {
    setGrid((grid) => !grid);
    setView(nextView);
  };

  const deleteEmp = (empId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/employee/delete/${empId}`,
          {
            method: "DELETE",
          }
        );

        const result = await response.json();
        if (result.status === 200) {
          Swal.fire("Deleted!", "Employee has been deleted.", "success");
          const newArray = removeObjectById(employees, empId);
          setEmployees(newArray);
        } else {
          Swal.fire("Oops!", "Failed to Delete Employee", "error");
        }
      }
    });
  };
  return (
    <div>
      <ListHeader handleChange={handleChange} view={view} />
      {grid ? (
        <Grid container>
          {employees?.map((employee) => (
            <GridCard
              key={employee._id}
              employee={employee}
              updateEmployee={updateEmployee}
              deleteEmp={deleteEmp}
            />
          ))}
        </Grid>
      ) : (
        <EmpTable
          employees={employees}
          updateEmployee={updateEmployee}
          deleteEmp={deleteEmp}
        />
      )}
    </div>
  );
}
