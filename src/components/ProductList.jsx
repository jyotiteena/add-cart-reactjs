import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { cart, addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState({});

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 15000 },
    { id: 3, name: "Headphone", price: 2000 },
  ];

  useEffect(() => {
    const updatedAddedProducts = {};
    cart.forEach((item) => {
      updatedAddedProducts[item.id] = true;
    });
    setAddedProducts(updatedAddedProducts);
  }, [cart]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card p-3">
              <h4>{product.name}</h4>
              <p>Price: ₹{product.price}</p>
              {addedProducts[product.id] ? (
                <Link to="/cart" className="btn btn-success">
                  Go To Cart
                </Link>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
