import React from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsername, grabUsername } from "../redux/actions/shoppingCart-action";
import FootlockerLogo from "../assets/FootlockerLogo.png";
import { useEffect } from "react";
// 

import "../css/Login.css";
import { GET_USERNAME, GRAB_USERNAME } from "../redux/action-types/getShoeData";

const supabase = createClient(
  "https://ezwmibduswttopxcmutr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs"
);

export default function Login(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();
  console.log(props.signUp);

  useEffect(() => {
    grabUsername(formData.username);

    return () => {};
  }, [formData.username]);

  const signup = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      FirstName: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      username: formData.username,
      password: formData.password,
    });
    if (user) {
      history.go("/");
    } else {
      alert(error.message);
    }
  };
  const login = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      FirstName: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      username: formData.username,
      password: formData.password,
    });
    if (session) {
      history.go("/home");
    } else {
      alert(error.message);
    }
    console.log(error);
    console.log(user);
  };

  console.log(formData);
  return (
    <div className="mainLoginDiv">
      <img
        className="loginLogo"
        src={FootlockerLogo}
        alt=""
      />

      <div className="loginFormDiv">
        <form className="loginForm">
          {/* <input className="loginInputs" onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value })} className="inputBoxes" type="text" name="FirstName" value={formData?.firstName} id="" placeholder="First Name"/> */}
          {/* <input className="loginInputs" onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})}  className="inputBoxes" type="text" name="lastname" value={formData?.lastname} id="" placeholder="Last Name"/> */}
          <input
            className="loginInputs"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className="inputBoxes"
            type="text"
            name="email"
            value={formData?.email}
            id=""
            placeholder="Email"
          />
          <input
            className="loginInputs"
            onChange={(e) =>
              dispatch({
                type: GRAB_USERNAME,
                payload: e.target.value,
              })
            }
            className="inputBoxes"
            type="text"
            name="username"
            id=""
            placeholder="Username"
          />
          <input
            className="loginInputs"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className="inputBoxes"
            type="text"
            name="password"
            value={formData?.password}
            id=""
            placeholder="Password"
          />
          <h3>
            <a className="loginCreateAccount" href="/signup">
              Create Account
            </a>
          </h3>
          {props?.signup ? (
            <button
              className="loginButton"
              onClick={(e) => signup(e)}
              type="submit"
            >
              SIGN UP
            </button>
          ) : (
            <button
              className="loginButton"
              onClick={(e) => login(e)}
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
