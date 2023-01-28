import React, { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

let initial = true;

const CartProvider = (props) => {
    const [products, updateProducts] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const authCtx = useContext(AuthContext);
    const [ isLoading, setIsLoading ] = useState(false);

    const userEmailId = localStorage.getItem('email');

    useEffect(() => {
        setIsLoading(false);
        const fetchCartData = async() => {
            try{
                const response = await axios.get(`https://ecom-64d1c-default-rtdb.firebaseio.com/${userEmailId}.json`);
                console.log(response.data);
                setIsLoading(true);
                response.data === null? updateProducts([]) : updateProducts(response.data);
            }catch (err) {
                console.log(err);
            }
        };
        fetchCartData();
    },[userEmailId]);
    

    const addItemHandler = async(item) => {
        let itemsPresent = false;
       const newItemArray = [...products];
       console.log(newItemArray);
       newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
        }
       })
       if(itemsPresent === false){
        updateProducts([...products,item]);
       }else{
        updateProducts([newItemArray]);
       }
        
    };


    const removeItemHandler = (id) => {
        const existingItems = [...products];
        existingItems.forEach(async (item, ind) => {
            if (item.id === id) {
                if (item.quantity === 1) {
                console.log("i've got one item ", id);
                existingItems.splice(ind, 1);
                updateProducts(existingItems);
                } else {
                item.quantity--;
                updateProducts(existingItems);
                }
            }
        });
    };
    
    useEffect(() => {
        const quantityHandler = () => {
          if (!initial) {
            initial = true;
            return;
          }
          const existingItems = [...products];
          const quantity = existingItems.reduce(
            (ack, item) => item.quantity + ack,
            0
          );
          setQuantity(quantity);
          console.log(existingItems);
        };
        quantityHandler();
    }, [products]);

    useEffect(() => {
        const addingItems = async() => {
            try{
                const res1 = await axios.put(`https://ecom-64d1c-default-rtdb.firebaseio.com/${userEmailId}.json`,products);
                console.log(res1);
            }catch (err) {
                console.log(err);
            }
        };
        addingItems();
    },[userEmailId, products]);

    const cartContext = {
        items:products,
        productsQuantity: quantity,
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