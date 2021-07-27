import React from "react";
import "./App.css";
//VIEWS
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Shop from "./Views/Shop";
//COMPONENTES
import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import ItemCategoryContainer from "./Components/ItemListContainer/ItemCategoryContainer";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//CONTEXT
import { CartProvider } from "./Components/Context/CartContext";
//Material UI
import { BottomNavigation, makeStyles } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    padding: "0.5rem",
    color: "grey",
    boxShadow: `0 5px 8px 0 rgb(0, 19, 38, 0.1), 0 7px 20px `,
  },
});

function App() {
  const classes = useStyles();

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Shop" component={Shop} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/detail/:id" component={ItemDetailContainer} />
            <Route path="/category/:id" component={ItemCategoryContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
          </Switch>
          <BottomNavigation className={classes.root}>
            <a href="https://www.facebook.com/olafurarnalds" target="_blank">
              <BottomNavigationAction
                icon={<FacebookIcon style={{ color: "#05314d" }} />}
              />
            </a>
            <a href="https://twitter.com/olafurarnalds?lang=es" target="_blank">
              <BottomNavigationAction
                icon={<TwitterIcon style={{ color: "#05314d" }} />}
              />
            </a>
            <a
              href="https://www.instagram.com/olafurarnalds/?hl=es"
              target="_blank"
            >
              <BottomNavigationAction
                icon={<InstagramIcon style={{ color: "#05314d" }} />}
              />
            </a>
          </BottomNavigation>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
