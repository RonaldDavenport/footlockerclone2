import Home from "./components/Home";

import Login from "./components/Login";
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const signUp = true;
  const name = useSelector((state) => state.getUsername.username);
  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log(user)

  return (
    <Router forceRefresh={true}>
      <Switch>
      <Route exact path="/signup">
        <SignUp signUp={signUp} />
      </Route>
      <Route exact path="/login">
            <div className="loginDiv">
              <Login />
            </div>
          </Route>
        {  user ? (
          <>
            

            <div className="App">
            <Header name={name} signUp={signUp} />
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </div>
          </>
        ) : (
          console.log("L")
        )}
      </Switch>
    </Router>
  );
}

export default App;
