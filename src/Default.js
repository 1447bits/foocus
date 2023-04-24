import React from "react";
import { Nav } from "./components/Nav";

export default class Default extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <>
            <Nav />
            {this.props.children}
        </>
    }
}
