const ProductPreview = ({ id, title, img, price, addToCart }) => {
  return (
    <div className="product-preview">
      <div className="top">
        <img src={img} alt="product" />
      </div>
      <div className="bottom">
        <h3 className="title">{title}</h3>
        <div className="price">{price} VBUCKS</div>
        <button className="btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPreview;
