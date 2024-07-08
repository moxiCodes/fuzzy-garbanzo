import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Employee } from "./Employee";

type EmployeesTableProps = {
  employees: Employee[];
};

export const EmployeesTable = ({ employees }: EmployeesTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => {
            const {
              id,
              firstName,
              surName,
              company,
              email,
              phone,
              address,
              team,
            } = employee;
            return (
              <TableRow key={id}>
                <TableCell>{firstName}</TableCell>
                <TableCell>{surName}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{team}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// import {
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//   } from "@mui/material";
//   import { Employee } from "./Employee";

//   export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
//     return (
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Company</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Team</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
