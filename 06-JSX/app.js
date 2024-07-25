
const root = ReactDOM.createRoot(document.querySelector("#root"));

const h1Heading = React.createElement("h1", {id: "heading"}, "I am an h1 Heading");

// at the end, jsx is a react Element
const h1headingUsingJSX = <h1 id="heading">Hi</h1>;

root.render(h1Heading)
// root.render(h1headingUsingJSX)
// console.log(h1headingUsingJSX)
