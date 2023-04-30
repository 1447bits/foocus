import React from "react";
import { Nav } from "./components/Nav";
import { Route, Routes, } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import BucketPage from './pages/Buckets';
import Expandcard from './pages/Expandcard';
import Home from "./pages/Home"
import Info from "./pages/Info"



export default function Foocus(props) {

    let loggedStatus = localStorage.getItem("login")

    function load(component) {
        return <>
            <Nav />
            {component}
        </>
    }
    return <div className="Foocus">
        <Routes>
            // is logged in load home page else load loginPage
            <Route path="/" exact element={loggedStatus === "true" ? load(<Home />) : <LoginPage />} />
            <Route path="/buckets" exact element={load(<BucketPage />)} />
            <Route path="/expendBucket" exact element={load(<Expandcard />)} />
            <Route path="/info" exact element={load(<Info />)} />
        </Routes>
    </div>
}

