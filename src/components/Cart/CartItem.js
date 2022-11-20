import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (

            <li className={classes['c-column']}>
                <div className={classes['c-row']}>
                    <span className={classes['c-item']}>
                        <img src={props.imageUrl} alt="" className={classes.img}/>
                        <span>{props.title}</span>
                    </span>
                    <span className={classes.price}>{price}</span>
                        <span className={classes.quantity}>
                            {props.quantity}
                            <button>REMOVE</button>
                        </span>
                </div>
            </li>
    );
};

export default CartItem;