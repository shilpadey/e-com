import React from "react"

/*const getCartData = () => {
    let cartData = localStorage.getItem("localCart");
    if(cartData === []){
        return [];
    }else{
        return JSON.parse(cartData);
    }
};*/

const CartContext = React.createContext({
    items: [],
    //productsQuantity: 0,
    loader : false,
    addItem: (item) => {},
    removeItem: (id)=> {},
})

export default CartContext;