import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClient } from "@supabase/supabase-js";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import FootlockerLogo from "../assets/FootlockerLogo.png";
import { useHistory } from "react-router-dom";
import "../css/Header.css";
import "../css/Footlocker.css";
export default function Header(props) {
  const supabase = createClient(
    "https://ezwmibduswttopxcmutr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs"
  );

  const signOut = async (e) => {
    const {error} = await supabase.auth.signOut();
    
    history.push("/login");
    if(error){
      alert.message(error)
    }
    
  };

  const history = useHistory();
  return (
    <div>
      <div className="userHeader">
        <h1 className="userWelcome">Welcome, {props.name}</h1>
        <button className="logOutButton" onClick={signOut}>
          Log Out
        </button>
      </div>

      <div className="navigationBar">
        <img
          onClick={() => history.push("/home")}
          className="navbarLogo"
          src={FootlockerLogo}
          alt=""
        />

        <div className="navbarIcons">
          <p onClick={() => history.push("/cart")} className="navbarIcon">
            <FontAwesomeIcon icon={faCartPlus} />
          </p>
        </div>
      </div>
    </div>
  );
}
