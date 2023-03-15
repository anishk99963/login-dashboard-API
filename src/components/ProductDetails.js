import React from 'react';
import './ProductDetails.css';

function ProductDetails({ product, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ProductDetails;
