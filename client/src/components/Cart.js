import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout"
import { useHistory } from "react-router-dom";


export default function Cart(props) {

  const cartData = useSelector((state) => state.CartInfo.Cart);
  const history = useHistory()
  console.log();
  const dispatch = useDispatch();
  const { shoes } = props;
  console.log("shoe title", cartData);

  function handleToken(token, addresses){
    console.log({token, addresses})
  }

  return (
    <div className={cartData.length === 0 ? "cartEmptyContainer" : "cartContainer"}>
    
        
      <div className={cartData.length === 0 ? "cartEmptyDiv" : "cartItems"}>
        {cartData.length === 0 ? (
          <div className="emptyCartDiv">
          <h1 className="emptyCartText">Cart is empty</h1>
          <button
            onClick={() => history.push("/Product")}
            type="button"
            class="btn btn-dark"
            id="topButton"
          >
            Shop Now
          </button>
          </div>
        )
        : 
        (
          <div > 
         <ul>
        {cartData.map((shoes) => (
          <CartItem shoes={shoes} />
      
        ))}
        </ul>
        <div className="checkoutBox">
 
 <h1 className="cartText">Total Items: {cartData.length} </h1>
 <h1 className="cartText">Total Price: ${cartData.reduce((a,c)=>a +  c.price,0 )}</h1>
 <StripeCheckout
stripeKey="pk_test_51Jupp3Fecc1uoCXipXtXWURz4Gx0e6pg2onYGHr3H53Chv6GfrNeNCuiCGpSnEpuDy3fRXLWwoZbJuRITWh0MEut00DLuz9ogk"
token={handleToken}/>

</div>
        
        </div>
        
        
        )
        
        }
        
        </div>
        
        
     
     
    </div>
    
  )
}
