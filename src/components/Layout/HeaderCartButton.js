import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    /*let quantity = 0;
    cartCtx.items.forEach(item => {
        quantity = quantity + Number(item.quantity);
    });*/

    return (
        <React.Fragment>
            <button className={classes.cart} onClick={props.onClick}>
                Cart
                <span className={classes['cart-number']}>{cartCtx.productsQuantity}</span>
            </button>
            
        </React.Fragment>
    );
};

export default HeaderCartButton;