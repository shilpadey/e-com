import React from "react"

const CartContext = React.createContext({
    items: [],
    productsQuantity: 0,
    loader : false,
    addItem: (item) => {},
    removeItem: (item)=> {},
})

export default CartContext;