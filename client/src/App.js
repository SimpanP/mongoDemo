import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default App;
