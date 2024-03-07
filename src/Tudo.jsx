//method one
// export default function Tudo(props) {

//method 2
// export default function Tudo({tasks}) {
//   return (
//     <>
//       <ul>
//
//
//       </ul>
//     </>
//   )
// }
// method 3
export default function Tudo({tasks,isdone}) {
  if(isdone===true){
    return <li>finish: {tasks}</li>
  }
  else{
    return <li>work on it : {tasks}</li>
  }
}

//method 4
// export default function Tudo({tasks,isdone}) {
//   if(isdone){
//     return <li>tasks finish: {tasks}</li>
//   }
//   return <li>work on  tasks : {tasks}</li>
// }
//method 5 
// export default function Tudo({ tasks, isdone }) {
//   return (
//     <li>
//       {isdone ? "finished" : "work on it "} : {tasks}
//     </li>
//   );
//method 6
// export default function Tudo({ tasks, isdone }) {
//   return (
//     <li>
//      {tasks} {!isdone && "done"}
//     </li>
//   );
// }
// method 7
// export default function Tudo({ tasks, isdone }) {
//   return (
//     <li>
//      {tasks} {!isdone || "do it"}
//     </li>
//   );
// }
