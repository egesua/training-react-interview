import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const getFullUserName = (userInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then(({ data }) => {
        console.log(data);
        setRandomUserDataJSON(JSON.stringify(data));
        setUserInfo(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

      {userInfo.map((userInfo, id) => (
        <div key={id}>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} />
        </div>
      ))}

      <pre>{randomUserDataJSON}</pre>
    </div>
  );
}

export default App;
