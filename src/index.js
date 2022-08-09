import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Connect } from "@aragon/connect-react";

const network = {
  chainId: 4,
  name: "rinkeby",
};

ReactDOM.render(
  <React.StrictMode>
    <Connect location="alite.aragonid.eth" connector="thegraph" options={{ network: { chainId: 4 } }}>
      <App />
    </Connect>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
