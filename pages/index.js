import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("요거트", 159, 6.0, 24, 4.0),
  createData("아이스크림 샌드위치", 237, 9.0, 37, 4.3),
  createData("에끌레어", 262, 16.0, 24, 6.0),
  createData("컵케이크", 305, 3.7, 67, 4.3),
  createData("진저브레드", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>음식 (100g serving)</TableCell>
              <TableCell align="right">칼로리</TableCell>
              <TableCell align="right">지방&nbsp;(g)</TableCell>
              <TableCell align="right">탄수화물&nbsp;(g)</TableCell>
              <TableCell align="right">단백질&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <style>
        {`
    .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
      width: 800px;
      margin: 0 auto;
    }
    .css-1q1u3t4-MuiTableRow-root {
      background: tomato;
    }
    `}
      </style>
    </>
  );
}
