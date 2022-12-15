import React, { useState } from "react";
import axios from "axios";
import CartContext from "./cart-context";
//import AuthContext from "./auth-context";

const CartProvider = (props) => {
    const [products, updateProducts] = useState([]);
    //const [quantity, setQuantity] = useState(0);
    //const authCtx = useContext(AuthContext);

    const userEmailId = localStorage.getItem('email');

    /*useEffect(() => {
        const productsQuantityHandler = () => {
            const itemsArray = [...products];
            const quantity = itemsArray.reduce((accum, item) => {
                return accum+item.quantity;
            },0);
            setQuantity(quantity);
        };
        productsQuantityHandler();
    },[products]);*/
    

    const addItemHandler = async(item) => {
       // let itemsPresent = false;
       const newItemArray = [...products];
       console.log(newItemArray);
       const url = `https://crudcrud.com/api/b50b346cd1564eb6a27a6af6f789fda1/cart${userEmailId}`
       /*newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
        }
       })
       if(itemsPresent === false){
        updateProducts([...products,item]);
       }else{
        updateProducts([newItemArray]);
       }*/
        function sameIndex (itm) {
            console.log(itm)
            if (itm.id === item.id)
            {
              return itm;
            }
        }
        const idx = newItemArray.findIndex(sameIndex);
        console.log(idx)
        if (idx === -1) {
            try{
                const response = await axios.post(url,item)
                updateProducts([...products, response.data]);
                console.log(response)
            }
            catch (err){
                console.log(err)
            }
        }
        else {
            try{
                const res = await axios.get(url)
                const elements = res.data;
                console.log(elements);
                function mapProduct(i) {
                    if(i.title === item.title)
                    {
                        return i
                    }
                }
                const sameItem = newItemArray.findIndex(mapProduct)
              console.log('items')
             console.log(idx)
             let fetchProduct = newItemArray[sameItem]
             let updatedItem = {...fetchProduct, quantity: fetchProduct.quantity + 1 }
             let temp = updatedItem._id
             console.log(temp);
             delete updatedItem._id
             const res1 = await axios.put(`https://crudcrud.com/api/b50b346cd1564eb6a27a6af6f789fda1/cart${userEmailId}/${temp}`, updatedItem)
             updateProducts([res1.data]);
            }
            catch (err)
            {
              console.log(err);
            }
        };
    };


   /* const removeItemHandler = (id) => {
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
    };*/
    
    const removeItemHandler = (item) => {
        const newItemArray = [...products];
        const deleteIndex = products.findIndex(each => each.id === item.id);
        const temp = deleteIndex._id
        axios.delete(`https://crudcrud.com/api/b50b346cd1564eb6a27a6af6f789fda1/cart${userEmailId}/${temp}`)
          .then((res) => {
            newItemArray.quantity = newItemArray[temp].quantity - 1;
            updateProducts([newItemArray]);
          })
          .catch(err => {
            console.log(err);
          });
    };

    

    const cartContext = {
        items:products,
        //productsQuantity: quantity, 
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