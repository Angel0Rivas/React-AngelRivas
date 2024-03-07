import React from 'react';

const ItemDetail = ({ match }) => {
  // Obtén el ID del ítem de los parámetros de la URL
  const itemId = match.params.id;

  // Aquí podrías usar el ID para obtener los detalles del ítem de tu fuente de datos
  // Por ejemplo, podrías hacer una llamada a una API o buscar en una lista de ítems

  // Ejemplo de datos de un ítem
  const item = [
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

  return (
    <div>
      <h2>Detalles del ítem {itemId}</h2>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {/* Renderiza otros detalles del ítem */}
    </div>
  );
};

export default ItemDetail;