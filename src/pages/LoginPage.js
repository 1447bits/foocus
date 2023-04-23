import React from "react";
import ProfileIcon from "../icons/profile-icon.png"

export class LoginPage extends React.Component {
    render() {
        return <div id="LoginPage"
            style={{ height: "95vh" }}
        >
            <div id="loginbox"
                style={{ width: "60%", 
                marginInline: "auto", 
                marginTop: "3em",
                padding: "1em", 
                background: "rgba(232, 232, 250, 0.5)", 
                boxShadow: "0px 0px 20px #959595", 
                backdropFilter: "blur(8px)", 
                borderRadius: "0.5em" }}
            >
                <span style={{ display : "flex" , gap: "1em", marginInline: "auto", width: "fit-content"}}>
                    <img src={ProfileIcon} style={{ width: "2.2em" }} />
                    <h1 style={{ color: "#403DEE" }}>LOGIN</h1>
                </span>

            </div>    
        </div>
    }
}