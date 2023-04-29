import React from "react";
import { Nav } from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import BucketPage from './pages/Buckets';
import Expandcard from './pages/Expandcard';



export default function Foocus(props) {

    // let navigate = useNavigate()
    let loggedStatus = localStorage.getItem("login")
    // loggedStatus === "true" ? navigate("/buckets") : navigate("/")

    return <div className="Foocus">
        <Nav />
        <Routes>
            <Route path="/" exact element={ loggedStatus === "true" ? <BucketPage /> : <LoginPage />} />
            <Route path="/buckets" exact element={<BucketPage />} />
            <Route path="/expendBucket" exact element={<Expandcard />} />
        </Routes>
    </div>
}

