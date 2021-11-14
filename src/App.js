import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./WebPages/LoginPage/Login";
import Home from "./WebPages/HomePage/Home";
import ProvideAuth from "./Context/ProvideAuth";
import Registration from "./WebPages/RegistrationPage/Registration";
import ExploreProducts from "./WebPages/ExploreProductsPage/ExploreProducts";
import PageNotFound404 from "./WebPages/PageNotFound404/PageNotFound404";
import Dashboard from "./WebPages/DashboardPage/Dashboard";
import PurchaseCar from "./SharedComponents/PurchaseCarPage/PurchaseCar";
import PrivateRoute from "./SharedComponents/PrivateRoute/PrivateRoute";
import About from "./WebPages/AboutUsPage/About";
function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/purchase_Car/:productId">
            <PurchaseCar></PurchaseCar>
          </PrivateRoute>
          <Route path="/explore">
            <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <PageNotFound404></PageNotFound404>
          </Route>
        </Switch>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
