import { Link } from "react-router-dom";
import routes from "../routes.json";

const Home = () => {
  return (
    <div className="home">
      <h1 className="logo">Shop App</h1>
      <div className="text">Best products at best price!</div>
      <Link to={routes.SHOP}>
        <button className="btn">Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
