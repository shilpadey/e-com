import React from "react";

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Store</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <HeaderCartButton onClick={props.onShow}/>
            </ul>
            <h1>The Generics</h1>
        </div>
    );
};

export default Header;