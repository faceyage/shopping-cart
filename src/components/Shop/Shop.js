import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import ProductPreview from "./ProductPreview";

const Shop = ({ addToCart, match }) => {
  const [products, setProducts] = useState([]);
  let params = useParams();

  const getProducts = async () => {
    const shopItems = await fetchWeapons();
    setProducts(shopItems);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //get items for specific page number
  function getItems(pageNum) {
    //max item number per page
    const maxItems = 9;
    const startIndex = (pageNum - 1) * maxItems;
    const endIndex = startIndex + maxItems;
    return products.slice(startIndex, endIndex);
  }

  return (
    <div className="shop">
      <div className="products">
        {getItems(params.pageNum || 1).map((product) => {
          const { name } = product.item;
          const img = product.item.images.icon;
          const id = product.itemId;
          const price = product.store.cost;
          return (
            <ProductPreview
              key={id}
              title={name}
              img={img}
              price={price}
              addToCart={() => addToCart({ id, title: name, img, price, quantity: 0 })}
            />
          );
        })}
      </div>
      <PageNavigation products={products} currPage={Number(params.pageNum) || 1} />
    </div>
  );
};

const fetchWeapons = async () => {
  const API_URL = "https://fortnite-api.theapinetwork.com/store/get";
  const response = await fetch(API_URL);
  const json = await response.json();
  const products = json.data;
  return products;
};

export default Shop;
