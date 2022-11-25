import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
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
                        <NavLink activeClassName={classes.active} to="/contact">Contact US</NavLink>
                    </li>
                    <HeaderCartButton onClick={props.onShow}/>
                </ul>
                <h1>The Generics</h1>
            </nav>
        </header>
    );
};

export default Header;