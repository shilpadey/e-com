import React from "react";
import  './CartItem.css';

const CartItem = (props) => {
    const price = props.price === null ? 0 : `$${props.price}`;
    return (
        <div className="cart-row">
            <span className="cart-item cart-column">  
                <img src={props.imageUrl} alt="" className='cart-img'/>
                {props.title}
            </span>
            <span className='cart-price cart-column'>{price}</span>
            <div className='cart-quantity cart-column'>
                <span className='quantity'>{props.quantity}</span>
                <span>
                    <button onClick={props.onRemove}>REMOVE</button>
                </span>
            </div>
        </div>
    );
};

export default CartItem;