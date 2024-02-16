import React from "react";
import ReactDOM from "react-dom/client";
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const AnotherElement = (
  <a href="google.com" target="_blank">
    Visit me !{" "}
  </a>
);
const usermane = "Naruto";
const ReactElement = React.createElement(
  "a",
  { href: "google.com", target: "_blank" },
  "visit em lalala",
  usermane
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // {/* <MyApp/> */},
  ReactElement
  // AnotherElement

  // </React.StrictMode>
);
