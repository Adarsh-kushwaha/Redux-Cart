import React from "react";
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    title: "Laptop",
    price: 1100,
    description: "My premium laptop",
    id:"p1"


  },
  {
    title: "Book",
    price: 10,
    description: "My premium fiction book",
    id:"p2"

  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product => <ProductItem
          title={product.title}
          key={product.id}
          id={product.id}
          price={product.price}
          description={product.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
