import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import NewUser from "./pages/newUser/NewUser";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewMovie from "./pages/newmovie/NewMovie";
// import HomePage from "./pages/homepage/HomePage";
import { AuthContext } from "./context/authContext/AuthContext";
import { Fragment } from "react";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Route exact path="/">
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Switch>
        {user && (
          <Fragment>
            <Navbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:productId">
                <Product />
              </Route>

              <Route path="/newMovie">
                <NewMovie />
              </Route>
            </div>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
}

export default App;
