export const Product = ({ product }) => {
  const { title, price, category, sizes, brand, image } = product;
  return (
    <div className="product" >
      <img
        style={{ height: "120px", width: "150px" }}
        src={image}
        alt={title}
      />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <h4>{brand}</h4>
      <p>{category}</p>
      <>
        {sizes.map((size, index) => (
          <span key={index}>{size} </span>
        ))}
      </>
    </div>
  );
};
