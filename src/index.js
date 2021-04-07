import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import "./styles.css";

function App() {
  return (
    <div>
      {
        <Header
          profile={{
            pages: [{ name: "home" }, { name: "products" }],
            user: [{ name: "bob" }]
          }}
        />
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
