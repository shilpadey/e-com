import React, { useContext }  from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler = () => {
        authCtx.logout();
        history.replace('/login');
    };
    return (
        <header>
            <nav className={classes.header}>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/store">Store</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/contact">Contact US</NavLink>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                    <HeaderCartButton onClick={props.onShow}/>
                </ul>
                <h1>The Generics</h1>
            </nav>
        </header>
    );
};

export default Header;