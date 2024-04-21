import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
    
  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then(({data}) => {
        console.log(data);
        setRandomUserDataJSON(JSON.stringify(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

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
      <pre>
        {randomUserDataJSON}
      </pre>
    </div>
  );
}

export default App;
