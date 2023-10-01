import { createContext, useContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState({});

  return (
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      {children}
    </EmployeeContext.Provider>
  );
};
