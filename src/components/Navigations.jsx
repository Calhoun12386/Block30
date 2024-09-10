/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import "../index.css"

export default function Navigations() {
    return(
        <div id="navbar">
            
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/Register">Sign up</Link>
            <Link to="/account">My Account</Link>
            
            
            
        </div>
    );
}