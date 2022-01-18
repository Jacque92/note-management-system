// import * as React from "react";
// import Box from "@mui/material/Box";
// import { PostNote } from "../component/PostNote";
// import Button from "@mui/material/Button";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { Link } from "react-router-dom";
// import { useLocation, useRoutes } from "react-router";
// import { useState, useEffect } from "react";
// import { NewNote } from "./NewNote";
// import { NewThought } from "./NewThought";

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Routes } from "react-router";

// import { SavedNote } from "./SavedNote";

// const AllThoughts = (props) => {
//   const [thoughtNotes, setThoughtNotes] = useState([]);
//   const { view } = props;
//   useEffect(async () => {
//     let data = await fetch("http://localhost:8080/thought/all");
//     let notes = await data.json();
//     setThoughtNotes(notes);
//   }, []);

//   if (view === "gallery") {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           "& > :not(style)": {
//             m: 3,
//             width: 220,
//             height: 220,
//           },
//         }}
//       >
//         {thoughtNotes.map((thought) => {
//           return <PostNote key={thought.title} thoughtInfo={thought} />;
//         })}
//       </Box>
//     );
//   }
//   if (view === "list") {
//     return (
//       <Box style={{ margin: "0 4rem" }}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Thought</TableCell>
//               <TableCell align="right">Index</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {thoughtNotes.map((note) => (
//               <TableRow
//                 key={note.index}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {note.thought}
//                 </TableCell>
//                 <TableCell align="right">{note.index}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//     );
//   }
// };

// export function Board() {
//   const location = useLocation();

//   const [referenceIndex, setReferenceIndex] = useState(0);
//   const [referenceNotes, setReferenceNotes] = useState([]);
//   const [thoughtIndex, setThoughtIndex] = useState(0);
//   const [thoughtNotes, setThoughtNotes] = useState([]);
//   useEffect(async () => {
//     let data = await fetch("http://localhost:8080/reference/all");
//     let notes = await data.json();
//     setReferenceNotes(notes);
//   }, []);
//   useEffect(async () => {
//     let data = await fetch("http://localhost:8080/thought/all");
//     let notes = await data.json();
//     setThoughtNotes(notes);
//   }, []);

//   return (
//     <div>
//       <div style={{ textAlign: "right", padding: "2rem 2rem 1rem 0" }}>
//         <Button variant="outlined" onClick={() => handleView("list")}>
//           List View
//         </Button>
//         <Button
//           variant="outlined"
//           onClick={() => handleView("gallery")}
//           style={{ marginLeft: "1rem" }}
//         >
//           Gallery View
//         </Button>
//       </div>
//       {location.pathname === "/reference" ? (
//         <AllNotes
//           view={view}
//           setReferenceIndex={setReferenceIndex}
//           referenceIndex={referenceIndex}
//           referenceNotes={referenceNotes}
//         />
//       ) : (
//         <AllThoughts view={view} />
//       )}
//       {location.pathname === "/reference" ? (
//         <Link
//           id="addNew_btn"
//           to={location.pathname + "/new/" + `${referenceIndex + 1}`}
//         >
//           <Fab color="primary" aria-label="add">
//             <AddIcon />
//           </Fab>
//         </Link>
//       ) : (
//         <div></div>
//       )}

//       <Routes>
//         <Route
//           path={"/new/" + `${referenceIndex + 1}`}
//           element={<NewNote referenceIndex={referenceIndex} />}
//         ></Route>
//         <Route
//           path="/:index/sequence"
//           element={
//             <NewNote
//               referenceIndex={referenceIndex}
//               referenceNotes={referenceNotes}
//             />
//           }
//         ></Route>
//         <Route path="/:index" element={<SavedNote />}></Route>
//         <Route
//           path={`/thought/${thoughtIndex}`}
//           element={
//             <NewThought
//               thoughtIndex={thoughtIndex}
//               thoughtNotes={thoughtNotes}
//             />
//           }
//         ></Route>
//       </Routes>
//     </div>
//   );
// }
