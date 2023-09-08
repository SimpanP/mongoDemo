import React from "react";
import { useNavigate } from "react-router-dom";


function Home({setDifficulty}) {

  const navigate = useNavigate();
  const handleClick = () => {
   let level = document.getElementById("level").value;
   console.log(level);
   setDifficulty(level);
   navigate("quiz");
  };

  return <div> <select id="level">
  <option value={1}>Easy</option>
  <option value={2}>Medium</option>
  <option value={3}>Hard</option>
</select>
<button
  style={{ margin: 10 }}
  type="submit"
  onClick={() => handleClick()}
>
  Start  quiz
</button></div>;
  

}
export default Home;
