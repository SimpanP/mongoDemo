import React, { useEffect, useState } from "react";

//Hook test, fetch and display quizes on frontpage

export default function Fetch() {
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
    if (newDiff > 3) {
      newDiff = 1;
    }
    setDifficulty(newDiff);
  };

  return (
    <div>
      <ul>
        {data.map((obj) => {
          return <li>{obj.question}</li>;
        })}
        <li>
          {" "}
          <button
            style={{ margin: 10 }}
            type="submit"
            onClick={() => handleClick()}
          >
            Change difficulty
          </button>
        </li>
      </ul>

      <h1>{"Current difficulty is: " + difficulty}</h1>
    </div>
  );
}
