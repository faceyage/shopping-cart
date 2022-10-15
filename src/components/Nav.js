import { Link } from "react-router-dom";
import { ReactComponent as SearchLogo } from "../images/search.svg";
import { ReactComponent as ShoppingLogo } from "../images/shopping-cart.svg";
import { ReactComponent as DarkLogo } from "../images/dark-mode.svg";
import { ReactComponent as LightLogo } from "../images/light-mode.svg";
import routes from "../routes.json";
const Nav = ({ toggleCart, theme, toggleTheme, cartItems }) => {
  const cartLength = cartItems.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);

  return (
    <nav>
      <div className="logo">
        <Link to={routes.HOME}>Shop App</Link>
      </div>
      <div className="searchBar">
        <input type="text" name="search" id="search" placeholder="search not working" />
        <SearchLogo className="search-icon" />
      </div>
      <ul className="nav-items">
        <li onClick={toggleTheme}>
          {theme === "light" ? (
            <LightLogo className="lightLogo" />
          ) : (
            <DarkLogo className="darkLogo" />
          )}
        </li>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.SHOP}>Products</Link>
        </li>
        <li>
          <div className="card" onClick={toggleCart}>
            <ShoppingLogo />
            {cartLength > 0 && <div className="current-count">{cartLength}</div>}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
