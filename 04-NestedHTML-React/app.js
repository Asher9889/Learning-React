/**
 * How to Acheive Nested HTML Structure
 *  example:
 *              <div id="parent">
 *                   <div id="child">
 *                       <h1>i am an a H1 Heading</h1>
 *                   </div>
 *               </div>
 */

// const root = ReactDOM.createRoot(document.querySelector("#root"))

// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "heading"}, "I am an heading H1")))

// All is nested Html taken care by React behind the scene
// console.log(parent)
// parent is just a object
// render fn takes this object and render the elements
// root.render(parent)

// <--------------- How to Add siblings in nested Manner ---------->

/**
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1 class="heading">I am an Nested H1 Heading</h1>
 *          <h2 class="heading">I am an Nested H2 Heading</h2>
 *      </div>
 *  </div>
 */

// Step 1 :- Capture the Root Element Where ReactDOM add the html Element

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Step 2:- Now React will Create Elements

  /** const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "class" }, [
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
  ])
);

root.render(parent);
 */

// <---------- Another Nester Problem ------------>

/**
 *  <div id="parent">
 *      <div id="child1">
 *          <h1>I am a h1 tag</h1>
 *          <h2> i am a h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am a h1 tag</h1>
 *          <h2> i am a h2 tag</h2>
 *      </div>
 *  </div>
 */

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


// This code is not ready to production.