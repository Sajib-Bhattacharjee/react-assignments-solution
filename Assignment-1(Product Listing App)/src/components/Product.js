/* eslint-disable */
import React from 'react';

const Product = (props) => {
  const { id, title, price, description, category, image, rating } = props;
  return (
    <article className="product">
      <img className="product__img" src={image} alt="Product Image" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">Price: $ {price}</p>
        <p className="product__rating">Rating: {rating}</p>
        <p className="product__rating">ID: {id}</p>
        <p className="product__rating">Categroy: {category}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
