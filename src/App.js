import Home from "./components/Home";

import Login from "./components/Login";
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const signUp = true;
  const name = useSelector((state) => state.getUsername.username);
  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));


  return (
    <Router forceRefresh={true}>
      <Route exact path="/signup">
        <Login signUp={signUp} />
      </Route>
      <Switch>
        {user ? (
          <>
            <Header name={name} signUp={signUp} />

            <div className="App">
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
          <Route exact path="/">
            <div className="loginDiv">
              <Login />
            </div>
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
