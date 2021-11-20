import Home from "./components/Home";

import Login from "./components/Login";
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const hi = 15;
  const name = useSelector((state) => state.getUsername.username);
  console.log(name)
  const cartAddedItems = useSelector((state) => state.CartInfo.Cart);
  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  // console.log(user.currentSession.user.email);
  // const username = (user.currentSession.user.email)
  console.log(cartAddedItems);
  const signUp = true;
  return (
    <Router>
      <Switch>
      
        {user ? (
          <>
          <Header name={name} signUp={signUp}  />
            <Route  exact path="/signup">
              <Login signUp={signUp} />
              
            </Route>

            <div className="App">
            
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/product">
                <Product/>
              </Route>
              <Route path="/cart">
                <Cart shoes />
              </Route>
            </div>
          </>
        ) : (
          <Route path="/">
            <div className="loginDiv">
            <Login  />
            </div>
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;

