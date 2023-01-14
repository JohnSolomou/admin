import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import NewUser from "./pages/newUser/NewUser";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newproduct/NewProduct";
function App() {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Navbar />
      <Switch>
        <Route className="container">
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
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
          <Route path="/newproduct">
            <Product />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
