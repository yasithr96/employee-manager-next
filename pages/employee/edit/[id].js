import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from "react";
import { EmployeeContext } from "../../../context/EmployeeContext";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is Required !";
  } else if (values.firstName.length < 6 || values.firstName.length > 10) {
    errors.firstName = "Must be between 6-10 characters !";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is Required !";
  } else if (values.lastName.length < 6 || values.lastName.length > 10) {
    errors.lastName = "Must be between 6-10 characters !";
  }

  if (!values.email) {
    errors.email = "Email is Required !";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address !";
  }

  if (!values.phone) {
    errors.phone = "Phone Number is Required !";
  } else if (!/^(?:\+94)([0-9]{9})$/i.test(values.phone)) {
    errors.phone = "Invalid phone number !";
  }

  if (!values.gender) {
    errors.gender = "Please Select a gender !";
  }

  return errors;
};

const EditEmployee = () => {
  const { employeeData } = React.useContext(EmployeeContext);

  const updateEmployee = async (employeeDetails) => {
    console.log(employeeDetails);
    //update object
    const updateEmpObject = {
      firstName: employeeDetails.firstName,
      lastName: employeeDetails.lastName,
      email: employeeDetails.email,
      phoneNumber: employeeDetails.phone,
      gender: employeeDetails.gender,
    };

    const updateData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/employee/edit/${employeeData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEmpObject),
      }
    );
    const result = await updateData.json();
    console.log(result);
    if (result.status === 200) {
      Swal.fire("Success!", "Employee Updated!", "success").then(function () {
        window.location = "/employee/list";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.error,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      email: employeeData.email,
      phone: employeeData.phoneNumber,
      gender: employeeData.gender,
    },
    validate,
    onSubmit: (values) => {
      updateEmployee(values);
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          marginRight: 20,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" size="large">
          <Link href="/employee/list">List View</Link>
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="titlesection">
          <h1>Update Employee</h1>
        </div>
        <div
          className="formdata"
          style={{
            width: "400px",
            backgroundColor: "white",
            boxShadow: "5px 7px grey",

            padding: 40,
            borderRadius: "25px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={1.5} direction="column" alignItems="center">
              <TextField
                label="First Name"
                variant="outlined"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                sx={{ width: 400, margin: 2 }}
              />

              {formik.errors.firstName ? (
                <div
                  className="error-messages"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: "red",
                    width: 400,
                    fontSize: 13,
                  }}
                >
                  {formik.errors.firstName}
                </div>
              ) : null}

              <TextField
                label="Last Name"
                variant="outlined"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                sx={{ width: 400, margin: 2 }}
              />
              {formik.errors.lastName ? (
                <div
                  className="error-messages"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: "red",
                    width: 400,
                    fontSize: 13,
                  }}
                >
                  {formik.errors.lastName}
                </div>
              ) : null}
              <TextField
                label="Email"
                variant="outlined"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                sx={{ width: 400, margin: 2 }}
              />
              {formik.errors.email ? (
                <div
                  className="error-messages"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: "red",
                    width: 400,
                    fontSize: 13,
                  }}
                >
                  {formik.errors.email}
                </div>
              ) : null}
              <TextField
                label="Phone"
                placeholder="+94....."
                variant="outlined"
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                sx={{ width: 400, margin: 2 }}
              />
              {formik.errors.phone ? (
                <div
                  className="error-messages"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: "red",
                    width: 400,
                    fontSize: 13,
                  }}
                >
                  {formik.errors.phone}
                </div>
              ) : null}
              <Box sx={{ minWidth: 400 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="gender"
                    name="gender"
                    label="Gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <MenuItem value={"M"}>Male</MenuItem>
                    <MenuItem value={"F"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {formik.errors.gender ? (
                <div
                  className="error-messages"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: "red",
                    width: 400,
                    fontSize: 13,
                  }}
                >
                  {formik.errors.gender}
                </div>
              ) : null}
              <Button
                variant="contained"
                type="submit"
                sx={{ width: 200, padding: 1, margin: 2 }}
              >
                Save
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
