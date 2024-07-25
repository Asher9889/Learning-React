import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.querySelector("#root"))

// const div = React.createElement("div", {className: "parent"}, React.createElement("h1", {id: "heading"}, "I am an Heading"))

// root.render(div);

// Browser needs to understand script tag via a ES6 Module.


// it is a React element to be specific it is a jsx
const title = <h1 id="hi">Hello guys {300+200}</h1>
console.log(title)
// how to use jsx inside component
// just by using curly brackts


// component is just a JavaScript functions that returns jsx
// at the end jsx will convert into reactElement
const Heading = ()=>{
    return (
        <>
        <h1>I am an Heading Component Inside Root Div</h1>
        {title}
        <Data />
        </>
    )
}
// Rendering a component inside another component called as component composition

const Data = ()=> {
    return (
        <p>lorem ipsam </p>
    )
}

const Title = ()=> <h1>This is a Title</h1>

const App = ()=>{
    return (
        <div>
            {/* component is just a  function so we can call a function  */}
            {Title()}
        </div>
    )
}


root.render(
    <App />
)


