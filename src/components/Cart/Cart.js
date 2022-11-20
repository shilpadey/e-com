import React from "react";
import Modal from "../UI/Modal";

import classes from './Cart.module.css';
import CartItem from "./CartItem";

const cartElements = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
    
];
      

const Cart = (props) => {
    const cartItem = (
            cartElements.map(item => (
                <CartItem 
                    key={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))
    )
    
    return (
        <Modal onHideCart={props.onHideCart}>
            <div>
                <h2 className={classes['cart-h2']}>CART</h2>
                <button className={classes['x-btn']} onClick={props.onHideCart}>X</button>
                <div className={classes['cart-row']}>
                    <span className={classes['cart-item']}>Item</span>
                    <span className={classes['cart-price']}>Price</span>
                    <span className={classes['cart-quantity']}>Quantity</span>
                </div>
                <div>{cartItem}</div>
                <div className={classes.total}>
                    <span>Total</span>
                    <span>$<span id="total-value">0</span></span>
                </div>
                <button className={classes['purchase-btn']}>PURCHASE</button>
            </div>
        </Modal>
    );
};

export default Cart;