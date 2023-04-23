import React from "react";
import { Nav } from "./components/Nav";
import { LoginPage } from "./pages/LoginPage";

export default class Default extends React.Component {
    render() {
        return <>
            <Nav />
            <LoginPage />
        </>
    }
}
