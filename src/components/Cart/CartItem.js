import React from "react";
import  './CartItem.css';

const CartItem = (props) => {
    console.log(props.price);
    const price =`$${props.price.toFixed(2)}`;
    console.log(price);

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