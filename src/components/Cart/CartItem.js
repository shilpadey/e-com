import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <div className={classes['cart-item']}>
            <div className={classes['c-column']}>
                <span>  
                    <img src={props.imageUrl} alt="" className={classes['cart-img']}/>
                    {props.title}
                </span>
                <span className={classes.price}>{price}</span>
                <div className={classes.quantity}>
                    <span>
                        {props.quantity}
                        <button onClick={props.onRemove}>REMOVE</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;