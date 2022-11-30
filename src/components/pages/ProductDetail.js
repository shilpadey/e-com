import React from "react";
import { useParams } from "react-router-dom";
import Zoom from "react-img-zoom";
import './ProductDetail.css';



const productsArray = [
  {id: 'p1', title: "Colors",price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"},
  {id: 'p2', title: "Black and white Colors", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"},
  {id: 'p3', title: "Yellow and Black Colors", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png" },
  {id: 'p4', title: "Blue Color", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png" },
];

const ProductDetail = () =>{
const params = useParams();


const product = productsArray.find(product => product.id.toString() === params.productId);
const productImg =product.imageUrl;

 return (
        <React.Fragment>
            <div className="main">
                <h3 className="title">PRODUCT DETAILS</h3>
                <Zoom
                    img={productImg}
                    zoomScale={2}
                    width={500}
                    height={500}
                />
                <div className="product_details">
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <p className="rate">Ratings <span className="num">5</span></p>
                </div>
            </div>

       </React.Fragment>
    );
}


export default ProductDetail;