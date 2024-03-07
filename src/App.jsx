
import "./App.css";
import Tudo from "./Tudo";
import Actor from "./Actor";
import Model from "./Model";
// import Books from "./Books";
import Books from "./Books";

function App() {
  //arrary item print elm actors 25 line
  let actors = ["polok", "mahir", "roton"];
  //object for Books
  const book = [
    { title: "The Doors of Summer", author: "Eric Hoffer", price: "10$" },
    { title: " Summer", author: "Hoffer", price: "50$" },
    { title: "The Doors ", author: "Eric ", price: "100$" },
  ];

  //object for mode item print
  let models = [
    { name: "tom", age: 25 },
    { name: "Jerry", age: 30 },
    { name: "polok", age: 20 },
  ];

  return (
    <>
      <h1>Vite + React = My First Project</h1>
      {/* using function  component */}

      {models.map((pepole) => (
        <Model pepole={pepole}></Model>
      ))}

      {book.map((item) => (
        <Books item={item}></Books>
      ))}
      <Name></Name>

      <Actor name="polok"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Device college="icst" department="computer"></Device>
      <Device college="icst" department="civil"></Device> */}

      <Second college="icst" department="civil"></Second>
      <Second college="icst" department="computer"></Second>

      <Tudo tasks="learn react" isdone={true}></Tudo>
      <Tudo tasks="react core concept" isdone={false}></Tudo>
      <Tudo tasks="learn new think" isdone={true}></Tudo>
    </>
  );
}

function Name() {
  return (
    <>
      <h2>Mohiuddin</h2>
    </>
  );
}

// function Device(props) {
//   return (
//   <>
//    <h2>MY college name :{props.college}</h2>
//    <h2>My department name :{props.department}</h2>
//   </>
//   )

// }

function Second(props) {
  // console.log(props);
  return (
    <div className="info">
      <h3>This is my details : {props.college} </h3>
      <h3>This is my details : {props.department}</h3>
    </div>
  );
}

export default App;
