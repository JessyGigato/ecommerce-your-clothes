import React from 'react';
import Product from './product';

function Home() {
  const productos = [
    { id: 1, nombre: 'Camiseta', descripcion: 'Camiseta de algodón orgánico', precio: 19.99 },
    { id: 2, nombre: 'Pantalón', descripcion: 'Pantalón vaquero', precio: 39.99 },
  ];

  return (
    <div>
      <h1>Welcome to YourClothes</h1>
      <div className="productos-container">
        {productos.map(producto => (
          <Product key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}

export default Home;