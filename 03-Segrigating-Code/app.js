  // Now Creating a element using React
  const heading = React.createElement("h1", {id: "heading" , xyz: "abc"}, "This Heading is Created by React and rendered By ReactDOM")

  console.log(heading)
  // Now Performing DOM manipulation. Very First we have to captute the root element where all the stuff going to display or placed
  const root = ReactDOM.createRoot(document.querySelector("#div"))

  // Till now we created a Element & a root
  //  now Time to render it all ReactDOM do the all DOM manipulation

  root.render(heading);