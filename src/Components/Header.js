import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    return(
    <div className="menu">
        <div className="logo">
            <img
                className="res-logo"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2Crestaurant-icon-logo-free-design-template-e4e92c7d3b5631a777fce7a5d629a00a_screen.jpg?ts=1662468709"
                alt="Restaurant Logo"
            />
        </div>
        <ul className="menu-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/About">About us</Link>
            </li>
            <li>
                <Link to="/Contact">Contact us</Link>
            </li>
            <li>Cart</li>

            
            <button className="login-btn" onClick={() => {
                btnName === "Login" 
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}>{btnName}</button>
        </ul>
    </div>
    )
};