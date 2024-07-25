// const React = require("./node_modules/react/cjs/react.development")
// const ReactDOM = require("./node_modules/react-dom/cjs/react-dom.development")

// It throws error Parcel says that Browset Script can not have import or export

// now use ES6 syntax to import files
import React from "react";
// earlier we import ReactDom from react-dom but now we get it from react-dom/client
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"


// After import it throws same error as above

const root = ReactDOM.createRoot(document.querySelector("#root"))

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement(
        "h1",
        { class: "heading" },
        "I am an Nested h1 Heading"
      ),
      React.createElement(
        "h2",
        { class: "heading" },
        "I am an nested h2 Heading"
      ),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement(
        "h1",
        { class: "heading" },
        "I am an Nested h1 Heading"
      ),
      React.createElement(
        "h2",
        { class: "heading" },
        "I am an nested h2 Heading"
      ),
    ]),
  ]);
  
  
  root.render(parent);
  