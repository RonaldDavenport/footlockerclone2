import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addToCart, filterProducts } from "../redux/actions/shoppingCart-action";
import { ADD_TO_CART } from "../redux/action-types/getShoeData";
import { Button } from 'react-bootstrap';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
></link>;



let USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Product(props) {
  const dispatch = useDispatch();
  const productPageShoes = useSelector((state) => state.ShoeData);
  const currentState = useSelector((state)=>state)
  console.log(currentState.ShoeData.shoeData[0]);
  const shoeData = currentState.ShoeData.filteredItems;
  const shoeDataName = productPageShoes.shoeData;
  console.log(productPageShoes.filteredItems)
  console.log(shoeDataName);

  

  return (
    <div className="productMainContainer">
      <div className="productHeaderDiv">
      <h5>USE CODE TURKEY101 FOR 30% OFF ANY PURCHASE OVER $100</h5>

     
      
        
    
          </div>
      <div>

        <div className="filterButtons">
          <a class="btn btn-red" onClick={(e)=>{filterProducts(shoeDataName,e.target.name, dispatch)}} href="#" className="filer-box" data-filter="all" name="" >
            All
          </a>
          <a class="btn btn-red" onClick={(e)=>{filterProducts(shoeDataName,e.target.name,dispatch)}} href="#" className="filer-box" data-filter="Jordan" name="Jordan">
            Jordan
          </a>
          
          <a class="btn btn-red" onClick={(e)=>{filterProducts(shoeDataName,e.target.name,dispatch)}} href="#" className="filer-box" data-filter="Nike" name="Nike">
            Nike
          </a>
          <a class="btn btn-red" onClick={(e)=>{filterProducts(shoeDataName,e.target.name,dispatch)}}  href="#" className="filer-box" data-filter="adidas" name="adidas">
            Adidas
          </a>
        </div>
      </div>
      <input className="searchBar" onChange={(e)=>{filterProducts(shoeDataName,e.target.value, dispatch)}} className="searchBar" type="search" name="" id="search" placeholder="Search Shoe Brand" />
      <p>Page <a href="/Product">1</a> of <a href="/Product">1</a></p>
      <h3>Products Found: {shoeData.length}</h3>

      <div className="productContainer">
        {Object.keys(shoeData).map((key) => (
          <div className="productShoeDivs" key={key}>
            {" "}
            <div className="productShoeDivRow1">
              <img
                className="productPageImages"
                src={shoeData[key].media.thumbUrl}
                alt=""
              />
            </div>
            <div className="productShoeDivRow2">
              <h1 className="productText">{shoeData[key].brand}</h1>
              <h4 className="productText">{shoeData[key].name}</h4>

              <p className="productText">
                {USD.format(shoeData[key].retailPrice)}
              </p>

              <button
                type="button"
                class="btn btn-dark"
                onClick={() =>
                  dispatch({
                    type: ADD_TO_CART,
                    payload: {
                      id: shoeData[key].id,
                      image: shoeData[key].media.thumbUrl,
                      brand: shoeData[key].brand,
                      name: shoeData[key].title,
                      price: shoeData[key].retailPrice,
                    },
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
