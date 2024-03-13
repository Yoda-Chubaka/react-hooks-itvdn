import { useState } from "react";

// function App() {

//   const [counter, setCounter] = useState(0);
//   const [pcolor, setPcolor] = useState({ backgroundColor: "white" });

//   function increase() {
//     setCounter(counter + 1);
//     setPcolor({ background: "green" });
//   }

//   function decrease() {
//     setCounter(counter - 1);
//     setPcolor({ background: "red" });
//   }

//   return (
//     <>
//       <h1>{counter}</h1>
//       <p style={pcolor}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, iusto! Ex, soluta? Ipsum quo facilis commodi voluptatem id autem, eius maxime veniam, dignissimos, a amet illo velit repellat et quis.
//     Qui consequuntur voluptate sed quam sint ipsum et aliquam animi harum nobis voluptas odio dolorum, facere a quia cupiditate illum nihil! Quod porro reprehenderit consectetur eveniet maiores eaque quaerat cupiditate?</p>
//       <button onClick={increase}>Increase +</button>
//       <button onClick={decrease}>Decrease -</button>
//     </>
//   );
// }



// function App() {

//   const [val, setVal] = useState(0);

//   function valSetter(event) {
//     setVal(event.target.value);
//   }

//   return (
//     <>
//       <h3>{val}</h3>
//       <input type="range" onChange={valSetter} value={1}></input>
//     </>
//   )
// }



// function App() {

//   const [arr, setArr] = useState([1, 2, 3, 4, 5]);

//   const push = () => {
//     // let temp = [...arr];
//     // temp.push(1);
//     // setArr(temp);
//     setArr([...arr, 1]); 
//   }

//   return (
//     <>
//       <h3>{arr}</h3>
//       <button onClick={push}>PUSH</button>
//       <ul>
//         {arr.map((e, idx) => <li key={idx}>{e}</li>)}
//       </ul>
//     </>
//   )
// }



// function App() {

//   const [arr, setArr] = useState([1, 2, 3, 4, 5]);

//   const push = () => {
//     let temp = [...arr];
//     temp.push(Math.random() * 1001);
//     setArr(temp);
//   }

//   const [arr1, setArr1] = useState([1, 2, 3, 4, 5]);

//   const push1 = () => {
//     let temp = [...arr1];
//     temp.push(Math.random() * 101);
//     setArr1(temp);
//   }

//   return (
//     <>
//       <h3>{arr}</h3>
//       <h3>{arr1}</h3>
//       <button onClick={push}>PUSH</button>
//       <button onClick={push1}>PUSH100</button>
//       <ul>
//         {arr.map((e, idx) => <li key={idx}>{e}</li>)}
//       </ul>
//     </>
//   )
// }


function App() {

  const [pcolor, setPcolor] = useState({ color: "black" });

  function changeColor() {
    setPcolor({ color: "rgb(45, 245, 238)" });
  }


  return (
    <>
      <p style={pcolor}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, iusto! Ex, soluta? Ipsum quo facilis commodi voluptatem id autem, eius maxime veniam, dignissimos, a amet illo velit repellat et quis.
    Qui consequuntur voluptate sed quam sint ipsum et aliquam animi harum nobis voluptas odio dolorum, facere a quia cupiditate illum nihil! Quod porro reprehenderit consectetur eveniet maiores eaque quaerat cupiditate?</p>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}


export default App;
