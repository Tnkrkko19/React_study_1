import React from "react";
import ReactDom, { render } from "react-dom";
import App from "./App";

// ここはimportして使用している
// const App = () => {
//   return (
//     /* 複数行で記載したいときは、divでまとめる必要がある
//      ** けど、不必要なタグになってしまうので、
//      ** React.Fragmentを使用することができる
//      ** それも長いので<>で代用できる
//      */
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
