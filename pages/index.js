import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import datas from "../libs/datas.json";

// function createData(id, name, calories, fat, carbs, protein) {
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData(1, "요거트", 159, 6.0, 24, 4.0),
//   createData(2, "아이스크림 샌드위치", 237, 9.0, 37, 4.3),
//   createData(3, "에끌레어", 262, 16.0, 24, 6.0),
//   createData(4, "컵케이크", 305, 3.7, 67, 4.3),
//   createData(5, "진저브레드", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>University</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell acomponent="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.last_name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.university}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <style>
        {`
    .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
      width: 900px;
      margin: 0 auto;
    }
    .css-1q1u3t4-MuiTableRow-root {
      background: #B7C4CF;
    }
    `}
      </style>
    </>
  );
}
