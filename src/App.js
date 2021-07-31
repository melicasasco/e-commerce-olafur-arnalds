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
import { BottomNavigationAction } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

function App() {
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
          <div className="footer">
              <BottomNavigationAction
                icon={<YouTubeIcon style={{ color: "#05314d" }} />}
                href="https://www.youtube.com/channel/UC9XfDqYSm6ezuw0y_u3t_4A"
                target="_blank"
                rel="noreferrer"
              />
              <BottomNavigationAction
                icon={<TwitterIcon style={{ color: "#05314d" }} />}
                href="https://twitter.com/olafurarnalds?lang=es"
              target="_blank"
              rel="noreferrer"
              />
              <BottomNavigationAction
                icon={<InstagramIcon style={{ color: "#05314d" }} />}
                href="https://www.instagram.com/olafurarnalds/?hl=es"
                target="_blank"
                rel="noreferrer"
              />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
