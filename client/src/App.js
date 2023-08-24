import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Fetch from "./components/Fetch/Fetch";

//Hook test, fetch and display quizes on frontpage

function App({ children }) {
  return (
    <div>
      <Navbar />
      <Fetch />
      {children}
    </div>
  );
}

export default App;
