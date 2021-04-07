import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProduct from "./Components/AddProduct/AddProduct";
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); 

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/manageProduct">
        <ManageProduct></ManageProduct>
        </PrivateRoute>
        <PrivateRoute path="/addProduct">
        <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/checkOut/:id">
        <CheckOut></CheckOut>
        </PrivateRoute>
        <PrivateRoute path="/checkOut">
        <CheckOut></CheckOut>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
