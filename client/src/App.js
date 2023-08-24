import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";


//Hook test, fetch and display quizes on frontpage

function App({ children }) {
  const [data, setData] = useState([]);
  const [difficulty, setDifficulty] = useState(1);
  const fetchData = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_SERVER}/GetQuizesByDifficulty/${difficulty}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let json = await resp.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [difficulty]);

  const handleClick = () => {
    let newDiff = difficulty + 1;
    setDifficulty(newDiff);
  };

  return (
    <div>
      <Navbar />
      <ul>
        {data.map((obj) => {
          return <li>{obj.question}</li>;
        })}
      </ul>
      <button type="submit" onClick={() => handleClick()}></button>
      <h1>{"Current difficulty is: " + difficulty}</h1>
      {children}
    </div>
  );
}

export default App;
