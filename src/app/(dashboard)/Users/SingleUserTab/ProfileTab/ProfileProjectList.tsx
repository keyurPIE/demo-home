// import React, { useState } from "react";
// import {
//   // Box,
//   Checkbox,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   // TableHead,
//   TableRow,
//   TableSortLabel,
//   // TableSortLabel,
//   Typography,
// } from "@mui/material";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// interface profileProjectListProps {
//   title: string;
// }

// interface Data {
//   id: number;
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

// function createData(
//   id: number,
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ): Data {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData(1, "Cupcake", 305, 3.7, 67, 4.3),
//   createData(2, "Donut", 452, 25.0, 51, 4.9),
//   createData(3, "Eclair", 262, 16.0, 24, 6.0),
//   createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
//   createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
//   createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
//   createData(9, "KitKat", 518, 26.0, 65, 7.0),
//   createData(10, "Lollipop", 392, 0.2, 98, 0.0),
//   createData(11, "Marshmallow", 318, 0, 81, 2.0),
//   createData(12, "Nougat", 360, 19.0, 9, 37.0),
//   createData(13, "Oreo", 437, 18.0, 63, 4.0),
// ];

// // function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// type Order = "asc" | "desc";

// // function getComparator<Key extends keyof any>(
// //   order: Order,
// //   orderBy: Key
// // ): (
// //   a: { [key in Key]: number | string },
// //   b: { [key in Key]: number | string }
// // ) => number {
// //   return order === "desc"
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }

// interface HeadCell {
//   disablePadding: boolean;
//   id: keyof Data;
//   label: string;
//   numeric: boolean;
// }

// const headCells: readonly HeadCell[] = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Dessert (100g serving)",
//   },
//   {
//     id: "calories",
//     numeric: true,
//     disablePadding: false,
//     label: "Calories",
//   },
//   // {
//   //   id: "fat",
//   //   numeric: true,
//   //   disablePadding: false,
//   //   label: "Fat (g)",
//   // },
//   // {
//   //   id: "carbs",
//   //   numeric: true,
//   //   disablePadding: false,
//   //   label: "Carbs (g)",
//   // },
//   // {
//   //   id: "protein",
//   //   numeric: true,
//   //   disablePadding: false,
//   //   label: "Protein (g)",
//   // },
// ];

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data
//   ) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler =
//     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property);
//     };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// export default function ProfileProjectList({ title }: profileProjectListProps) {
//   const [order, setOrder] = useState<Order>("asc");
//   const [orderBy, setOrderBy] = useState<keyof Data>("calories");
//   const [selected, setSelected] = useState<readonly number[]>([]);

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data
//   ) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected: readonly number[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   return (
//     <Stack gap={2}>
//       <Typography sx={{ color: "#666cff", padding: 2.5 }}>{title}</Typography>

//       {/* Project list table */}
//       {/* <Box sx={{ width: "100%" }}> */}
//       {/* <TableContainer sx={{ maxHeight: 350 }}>
//         <Table aria-labelledby="tableTitle" size="medium"> */}
//       {/* <EnhancedTableHead
//             numSelected={selected.length}
//             order={order}
//             orderBy={orderBy}
//             onSelectAllClick={handleSelectAllClick}
//             onRequestSort={handleRequestSort}
//             rowCount={rows.length}
//           /> */}
//       {/* <TableBody> */}
//       {/* {visibleRows.map((row, index) => { */}
//       {/* {rows.map((row, index) => {
//               const isItemSelected = selected.includes(row.id);
//               const labelId = `enhanced-table-checkbox-${index}`;

//               return (
//                 <TableRow
//                   hover
//                   onClick={(event) => handleClick(event, row.id)}
//                   role="checkbox"
//                   aria-checked={isItemSelected}
//                   tabIndex={-1}
//                   key={row.id}
//                   selected={isItemSelected}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       color="primary"
//                       checked={isItemSelected}
//                       inputProps={{
//                         "aria-labelledby": labelId,
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell
//                     component="th"
//                     id={labelId}
//                     scope="row"
//                     padding="none"
//                   >
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="right">{row.carbs}</TableCell>
//                   <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//               );
//             })} */}
//       {/* </TableBody>
//         </Table>
//       </TableContainer> */}
//       {/* </Box> */}

//       <Table>
//         {/* <TableHead>
//           <TableRow>
//             <TableCell padding="checkbox">
//               <Checkbox
//                 color="primary"
//                 indeterminate={numSelected > 0 && numSelected < rowCount}
//                 checked={rowCount > 0 && numSelected === rowCount}
//                 onChange={onSelectAllClick}
//                 inputProps={{
//                   "aria-label": "select all desserts",
//                 }}
//               />
//             </TableCell>
//             {headCells.map((headCell) => (
//               <TableCell
//                 key={headCell.id}
//                 align={headCell.numeric ? "right" : "left"}
//                 padding={headCell.disablePadding ? "none" : "normal"}
//                 sortDirection={orderBy === headCell.id ? order : false}
//               >
//                 <TableSortLabel
//                   active={orderBy === headCell.id}
//                   direction={orderBy === headCell.id ? order : "asc"}
//                   onClick={createSortHandler(headCell.id)}
//                 >
//                   {headCell.label}
//                 </TableSortLabel>
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead> */}
//         <EnhancedTableHead
//           numSelected={selected.length}
//           order={order}
//           orderBy={orderBy}
//           onSelectAllClick={handleSelectAllClick}
//           onRequestSort={handleRequestSort}
//           rowCount={rows.length}
//         />
//       </Table>
//     </Stack>
//   );
// }

interface profileProjectListProps {
  title: string;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ProfileProjectList({ title }: profileProjectListProps) {
  return (
    <Stack gap={2}>
      <Typography sx={{ color: "#666cff", padding: 2.5 }}>{title}</Typography>

      {/* Project list table */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
    </Stack>
  );
}
