import React from "react";

import classes from './ProductsItem.module.css';

const ProductsItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <React.Fragment>
            <div className={classes.item}>
                <header className={classes.title}>
                    <h3>{props.title}</h3>
                </header>
                <div className={classes.picture}>
                    <img src={props.imageUrl} alt=""/>
                </div>
                <div className={classes.foot}>
                    <span>{price}</span>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductsItem;