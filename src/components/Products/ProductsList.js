import React from "react";
import ProductsItem from "./ProductsItem";

import classes from './ProductsList.module.css';

const PRODUCTS_ARR = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }  
];  

const ProductsList = () => {
    const productsList = PRODUCTS_ARR.map(item =>(
        <ProductsItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl} 
        />
    ));

    return (
        <React.Fragment>
            <section className={classes.container}>
                {productsList}
            </section>
            <button className={classes.cartbtn}>See The Cart</button>
        </React.Fragment>
    );

};

export default ProductsList;