import About from "../About";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


// test("Should About Component render or not", ()=>{
//     render(<About />)

//     const heading = screen.getByRole("heading")

//     // Assertion
//     expect(heading).toBeInTheDocument()
// })


// test("Should input component render", ()=>{
//     render(<About />)

//     const input = screen.getByPlaceholderText("input")

//     expect(input).toBeInTheDocument();
// })

test("should load one input box", ()=>{

    render(<About />);

    // called as Querying
    const inputBox = screen.getAllByRole("textbox");

    // called as assertion
    expect(inputBox.length).toBe(1);
})