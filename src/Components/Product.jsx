export const Product = ({ product }) => {
  const { title, price, category, sizes, brand, image } = product;
  return (
    <div className="product" >
      <img
        style={{ height: "120px", width: "150px" }}
        src={image}
        alt={title}
      />
      <p>{title}</p>
      <p>{price}</p>
      <p>{brand}</p>
      <p>{category}</p>
      <>
        {sizes.map((size, index) => (
          <span key={index}>{size} </span>
        ))}
      </>
    </div>
  );
};
