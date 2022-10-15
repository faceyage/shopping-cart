import { ReactComponent as AddIcon } from "../../images/add.svg";
import { ReactComponent as RemoveIcon } from "../../images/remove.svg";

function CartItem({ product, addToCart, removeFromCart }) {
  const { id, title, price, img, quantity } = product;
  return (
    <div className="product" key={id}>
      <div className="left">
        <img src={img} alt="product" />
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <div className="price">{price} VBUCKS</div>
        <div className="quantityCard">
          <button
            className="btn"
            onClick={() => {
              removeFromCart(product);
            }}>
            <RemoveIcon className="remove" />
          </button>
          <div className="quantity">{quantity}</div>
          <button
            className="btn"
            onClick={() => {
              addToCart(product);
            }}>
            <AddIcon className="add" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
