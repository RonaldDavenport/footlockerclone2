import React from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import FootlockerLogo from "../assets/FootlockerLogo.png";

import "../css/Login.css";
import { GRAB_USERNAME } from "../redux/action-types/getShoeData";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const pushToLogin = async () => {
    history.push("/login");
  };
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });
  const supabase = createClient(
    "https://ezwmibduswttopxcmutr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs"
  );

  const signup = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      email: formData.email,
      username: formData.username,
      password: formData.password,
    });
    pushToLogin();
  };

  return (
    <div className="mainLoginDiv">
      <img className="loginLogo" src={FootlockerLogo} alt="" />

      <div className="loginFormDiv">
        <form className="loginForm">
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
            type="password"
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

          <button
            className="loginButton"
            onClick={(e) => signup(e)}
            type="submit"
            value=""
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
