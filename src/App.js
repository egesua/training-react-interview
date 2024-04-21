import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function getRandomUserData() {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <h1>Hello egesua!</h1>
      <h2>This is your interview training area.</h2>

      <p>{counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
      <button onClick={getRandomUserData}>Fetch Random User Data</button>
    </div>
  );
}

export default App;
