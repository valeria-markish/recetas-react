import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Homepage />
        <footer>
          This website was coded in VS Code by{" "}
          <a
            href="https://github.com/valeria-markish"
            target="_blank"
            rel="noreferrer"
          >
            Valeria Markish
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/valeria-markish/recetas-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
