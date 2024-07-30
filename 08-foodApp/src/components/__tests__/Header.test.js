import { render, screen } from "@testing-library/react"
import logo from "../../assets/logo.png"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/store/appStore"

it("Should Header Component Load", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})