import React from 'react'
import { DELETE_FROM_CART } from '../redux/action-types/getShoeData'
import { useDispatch } from 'react-redux'
import "../css/Cart.css"
let USD = (new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}))

export default function CartItem(props) {
    const dispatch = useDispatch()
   const shoes = props.shoes
   console.log(shoes)
    return (
        
        <div className="cartDivs">
            <div className="cartDivColumn1">
        <h1 className="productText">{shoes.name}</h1>
        <img className="homePageShoeImages"src={shoes.image} alt="" />
        </div>
         
         <div className="cartDivColumn2">
             <p>Price: {USD.format(shoes.price)}</p>
             <p>Quantity: 1</p>
             
         
             <button type="button" class="btn btn-dark" onClick={()=>dispatch({type:DELETE_FROM_CART, payload:{id:shoes.id} })}>Remove From Cart</button>

         </div>
        </div>
        
    )
}
