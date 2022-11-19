import React from "react";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return (
        <React.Fragment>
            <button className={classes.cart}>
                Cart
                <span className={classes['cart-number']}>0</span>
            </button>
            
        </React.Fragment>
    );
};

export default HeaderCartButton;