import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from './Cart.module.css';
import CartItem from "./CartItem";

      

const Cart = (props) => {
    const crtCtx = useContext(CartContext);
    let totalAmount = 0;

    const removeCartHandler = (id) => {
        crtCtx.removeItem(id);
    }

    const cartItem = (
            crtCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove = {removeCartHandler.bind(null,item.id)}
                />
            ))
    );

    crtCtx.items.forEach(item => {
        totalAmount = totalAmount + (Number(item.quantity) * item.price) ;
    });
    
    
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
                    <span>$<span id="total-value">{totalAmount}</span></span>
                </div>
                <button className={classes['purchase-btn']}>PURCHASE</button>
            </div>
        </Modal>
    );
};

export default Cart;