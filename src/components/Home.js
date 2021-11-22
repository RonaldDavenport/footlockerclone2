import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addShoeData } from "../redux/actions/shoppingCart-action";
import ImageSlider from "./ImageSlider";
import "../css/Footlocker.css";
import BestSellers from "./BestSellers";
import { createClient } from "@supabase/supabase-js";
import { ADD_SHOE_DATA, ADD_TO_CART } from "../redux/action-types/getShoeData";
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
  const SliderPics = [
    {
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F09%2Fadidas-yeezy-boost-350-v2-static-closer-look-on-foot-1.jpg?q=75&w=800&cbr=1&fit=max",
    },
    {
      image:
        "https://www.sneakers-actus.fr/wp-content/uploads/2018/12/Nike-Air-Jordan-11-Concords-2018-blanche-et-noire-on-feet-2-1.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/ba/74/ca/ba74ca329a6305ebcda5d122007fecbb.jpg",
    },
  ];
  const dispatch = useDispatch();
  const shoeProduct = useSelector((state) => state);
  console.log(shoeProduct.ShoeData.shoeData[3]);
  const shoes = shoeProduct.ShoeData.shoeData;
  const history = useHistory();
  useEffect(() => {
    const getData = async() =>{
    const { data, error } = await supabase
  .from('footlockerData')
  .select()
  console.log(data)
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
