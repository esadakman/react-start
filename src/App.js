import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState } from "react";

let name = " dessad";
let age = 25;

function App() {
  const [showMain, setShowMain] = useState(true);

  // const myShow = () => {
  // setShowMain(!showMain);
  // if(showMain == true){
  //   setShowMain(false)
  // } else {
  //   setShowMain(true)
  // }
  // };

  return (
    <div className="App">
      <Navbar user={name} yas={age} />
      {/* {showMain && <Main user={name} yas={age} />} */}
      {showMain ? <Main user={name} yas={age} /> : <h1>Loading</h1>}
      hello
      <button onClick={() => setShowMain(!showMain)}>Main Component</button>
      {/* <button onClick={myShow}>Main Component</button> */}
      {/* {name} */}
    </div>
  );
}

export default App;
