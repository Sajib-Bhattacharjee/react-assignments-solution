// Both code id valid.

// /* eslint-disable */
// import React from 'react';

// const Product = ({ product }) => {
//   return (
//     <article className="product">
//       <img className="product__img" src={product.image} alt="Product Image" />
//       <div className="product__details">
//         <h4 className="product__title">{product.title}</h4>
//         <p className="product__price">Price: $ {product.price}</p>
//         <p className="product__rating">Rating: {product.rating.rate}</p>
//         <p className="product__rating">ID: {product.id}</p>
//         <p className="product__rating">Categroy: {product.category}</p>
//         <p className="product__desc">Description: {product.description}</p>
//         <button className="product__btn btn">Add to cart</button>
//       </div>
//     </article>
//   );
// };

// export default Product;



/* eslint-disable */
import React from 'react';

const Product = ({ product }) => {
  const { image, title, price, rating, id, category, description } = product;

  return (
    <article className="product">
      <img className="product__img" src={image} alt="Product Image" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">Price: $ {price}</p>
        <p className="product__rating">Rating: {rating.rate}</p>
        <p className="product__rating">ID: {id}</p>
        <p className="product__rating">Categroy: {category}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;



