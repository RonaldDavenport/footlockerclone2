import { ADD_SHOE_DATA, ADD_TO_CART, GRAB_USERNAME } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";
import { FILTER_PROUCTS_BY_BRAND } from "../action-types/getShoeData";
import ShoeData from "../reducers/ShoeData";
const { createClient } = require('@supabase/supabase-js')
const SUPABASE_URL="https://ezwmibduswttopxcmutr.supabase.co"
const SUPBASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs"
const supabase = createClient
 (SUPABASE_URL, 
 SUPBASE_KEY);


export const addToCart=(id,image,brand,name,retailPrice)=>{
    return{
        type:ADD_TO_CART,
        payload: id,image,brand,name,retailPrice
    }
}

export const removeFromCart = (id)=>{
    return{
        type: FILTER_PROUCTS_BY_BRAND, 
        
        payload: id
        
        
    }
}

export const filterProducts = (products,brand,dispatch) =>{
    dispatch({
        type: FILTER_PROUCTS_BY_BRAND,
        payload: {
            brand: brand,
            shoeData : brand == "" ? products: 
            Object.values(products).filter(x=> x.brand.indexOf(brand)>= 0)
        }
    })

}

export const addShoeData = ()=> async(data)=>{
    return{
        type: ADD_SHOE_DATA, 
        
        payload: data
        
        
    }
    
}

export const grabUsername = (username) =>{
return({
    type:GRAB_USERNAME,
    payload: username
})
}