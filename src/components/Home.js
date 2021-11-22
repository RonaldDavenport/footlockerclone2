import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import "../css/Footlocker.css";
import BestSellers from "./BestSellers";
import { createClient } from "@supabase/supabase-js";
import { ADD_SHOE_DATA } from "../redux/action-types/getShoeData";
import { SliderPics } from "./SliderPics";
const supabase = createClient
 ("https://ezwmibduswttopxcmutr.supabase.co", 
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs");



<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
></link>;

export default function Home() {
  const dispatch = useDispatch();
  const shoeProduct = useSelector((state) => state);
  const shoes = shoeProduct.ShoeData.shoeData;
  const history = useHistory();
  useEffect(() => {
    const getData = async() =>{
    const { data, error } = await supabase
  .from('footlockerData')
  .select()
  dispatch({
    type: ADD_SHOE_DATA,
    payload: 
      data
    
  })

  
}
  
getData();;
return () => {};
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="first-Section">
        <section className="topPicture">
          <h1>Shop New Arrivals</h1>
          <ImageSlider slides={SliderPics} />
          <button
            onClick={() => history.push("/Product")}
            type="button"
            class="btn btn-dark"
            id="topButton"
          >
            Shop Now
          </button>
          <div className="flxImageTextDiv"></div>
        </section>
      </div>

      <section className="newArrivals">
        <BestSellers shoes={shoes} />
      </section>
    </div>
  );
}
