import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop/Shop";
import Nav from "./Nav";

import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import routes from "../routes.json";

const RouteSwitch = () => {
  const [isShownCart, setIsShownCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState(fetchTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Add items to cart.
  // if items is already in cart increase quantity by 1
  const addToCart = (product) => {
    //add item if already has
    setCartItems((currCart) => {
      let didAdd = false;

      //check first if item already exist in cart if it's increment quantity.
      let tempCart = currCart.map((item) => {
        //if found id increment by one
        if (item.id === product.id) {
          didAdd = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      //if item not exist add directly
      if (!didAdd) {
        return [...currCart, { ...product, quantity: 1 }];
      }
      return tempCart;
    });
    //add item directly since it's not in list
  };

  //remove item from cart if one quantity only
  //if more quantity it's decreases quantity by one
  const removeFromCart = (product) => {
    setCartItems((currCart) => {
      let didRemove = false;

      const tempCart = currCart.map((item) => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            didRemove = true;
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

      if (!didRemove) {
        return currCart.filter((item) => item.id !== product.id);
      }
      return tempCart;
    });
  };

  /*
   *it's fake checkout function for now
   */
  function handlePurchase() {
    setCartItems([]);
    setIsShownCart(false);
    alert("thank you for purchasing");
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const toggleCart = () => {
    setIsShownCart((current) => !current);
  };

  const exitCart = () => {
    setIsShownCart(false);
  };

  return (
    <Router>
      <Nav toggleCart={toggleCart} theme={theme} toggleTheme={toggleTheme} cartItems={cartItems} />
      <main>
        <Routes>
          <Route path={routes.HOME} element={<Homepage />} />
          <Route path={routes.SHOP} element={<Shop addToCart={addToCart} />} />
          <Route path={`${routes.SHOP}/:pageNum`} element={<Shop addToCart={addToCart} />} />
        </Routes>
        {isShownCart && (
          <Cart
            cartItems={cartItems}
            exitCart={exitCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            handlePurchase={handlePurchase}
          />
        )}
      </main>
    </Router>
  );
};

const fetchTheme = () => {
  //fetch previous theme from localStorage
  let localTheme = localStorage.getItem("theme");
  if (!localTheme) {
    localTheme = "dark";
  }
  return localTheme;
};

export default RouteSwitch;
