import React from "react";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import BucketPage from './pages/Buckets';
import Expandcard from './pages/Expandcard';


export default function Foocus(props) {

    return <div className="Foocus">
        <Nav />
        <Routes>
            <Route path="/" exact element = {<LoginPage />} /> 
            <Route path="/buckets" exact element = {<BucketPage />} /> 
            <Route path="/expendBucket" exact element = {<Expandcard />} /> 
        </Routes>
    </div>
}
