import React from 'react';

function Product({ nombre, descripcion, precio }) {
  return (
    <div className="producto">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;