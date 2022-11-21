import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [products, updateProducts] = useState([]);

    const addItemHandler = (item) => {
        let itemsPresent = false;
       const newItemArray = [...products];
       newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
        }
       })
       if(itemsPresent === false){
        updateProducts([...products,item])
       }else{
        updateProducts(newItemArray);
       }
    };

    const removeItemHandler = (id) => {
        let hasItem = false;
        const newItemArray = [...products];
        newItemArray.forEach((element,index) => {
            if((id === element.id) && element.quantity === 1){
                hasItem = true;
                const temp = newItemArray.splice(index,1);
                updateProducts(temp);
            }else if(id === element.id){
                hasItem = true;
                newItemArray[index].quantity = Number(newItemArray[index].quantity) - 1;
            }
        });
        hasItem === false ? updateProducts([...products]) : updateProducts(newItemArray);
    };

    const cartContext = {
        items:products,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;