import React, { useContext } from "react";
//import { useEffect } from "react";
//import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import  './Cart.css';
import CartItem from "./CartItem";   

const Cart = (props) => {
    const crtCtx = useContext(CartContext);
    //const authCtx = useContext(AuthContext);
    let totalAmount = 0;

    const removeCartHandler = (id) => {
        crtCtx.removeItem(id);
    }
    //const userEmailId = localStorage.getItem('email');
    


    const cartItem = (
        <ul>
            {crtCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    id = {item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove ={removeCartHandler.bind(null,item.id)}
                />
            ))}
        </ul>
            
    );

    crtCtx.items.forEach(item => {
        totalAmount = totalAmount + (Number(item.quantity) * item.price) ;
    });
    
    
    return (
        <Modal onHideCart={props.onHideCart}>
            <div className="cart">
                <h2 className='cart-h2'>CART</h2>
                <button className='x-btn' onClick={props.onHideCart}>X</button>
                <div className="cart-row cart-header">
                    <span className='cart-item cart-column'>Item</span>
                    <span className='cart-price cart-column'>Price</span>
                    <span className='cart-quantity cart-column'>Quantity</span>
                </div>
                <div>{cartItem}</div>
            </div>
                <div className='cart-total'>
                    <span className="total-title">Total</span>
                    <span>$<span id="total-value">{totalAmount}</span></span>
                </div>
                <button className='purchase-btn'>PURCHASE</button>
        </Modal>
    );
};

export default Cart;