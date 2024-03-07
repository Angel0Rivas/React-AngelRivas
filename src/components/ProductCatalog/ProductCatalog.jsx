import React from 'react';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 10.99,
    imageUrl: 'https://www.zonalibremcy.net/cdn/shop/products/THR-01_6631b5fe-92b9-41f9-9e9d-903afeae9a62.jpg?v=1659710615'
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 19.99,
    imageUrl: 'https://example.com/product2.jpg'
  },
  // Agrega más objetos de productos aquí...
];

const ProductCatalog = () => {
  return (
    <div>
      <h1>Catálogo de productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;