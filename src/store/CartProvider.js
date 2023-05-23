import React, { useEffect, useState } from "react";
//import { useContext } from "react";
//import axios from "axios";
import CartContext from "./cart-context";
//import AuthContext from "./auth-context";

//let initial = true;

const CartProvider = (props) => {
    const localCartData = localStorage.getItem("localCart");
    const [products, updateProducts] = useState([]);
    //const [quantity, setQuantity] = useState(0);
    //const authCtx = useContext(AuthContext);
    const [ isLoading, setIsLoading ] = useState(false);

    //const userEmailId = localStorage.getItem('email');

    const getCartData = () => {
        return JSON.parse(localCartData);
    }
    

    const addItemHandler = (item) => {
        let itemsPresent = false;
       const newItemArray = [...products];
       console.log(newItemArray);
       newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(newItemArray[index].quantity) + 1;
            console.log(newItemArray[index].quantity);
        }
       })
       if(itemsPresent === false){
        updateProducts([...products,item]);
       }else{
        updateProducts(newItemArray);
       }
        
    };


    const removeItemHandler = (id) => {
        let hasItem = false;
        const newItemArray = [...products];
        newItemArray.forEach((element,index) => {
            if((id === element.id) && element.quantity ===1){
                hasItem = true;
                const temp = newItemArray.splice(index,1);
                updateProducts(temp);
            }else if(id === element.id){
                hasItem = true;
                newItemArray[index].quantity = Number(newItemArray[index].quantity-1);
            }
        });
        
        hasItem === false ? updateProducts([...products]) : updateProducts(newItemArray);
    };
    
    useEffect(() => {
        localStorage.setItem("localCart", JSON.stringify(products));
    },[products]);

    const cartContext = {
        items:products,
        //productsQuantity: quantity,
        loader : isLoading, 
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