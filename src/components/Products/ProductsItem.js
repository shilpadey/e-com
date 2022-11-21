import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from './ProductsItem.module.css';

const ProductsItem = (props) => {
    const itemCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCart = (event) => {
        event.preventDefault();
        const arr = {
            id: props.id,
            title: props.title,
            imageUrl: props.imageUrl,
            price: props.price,
            quantity: 1,
        };
        itemCtx.addItem(arr);
    };


    return (
        <React.Fragment>
            <div className={classes.item}>
                <header className={classes.title}>
                    <h3>{props.title}</h3>
                </header>
                <div className={classes.picture}>
                    <img src={props.imageUrl} alt=""/>
                </div>
                <div className={classes.foot}>
                    <span>{price}</span>
                    <button onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductsItem;