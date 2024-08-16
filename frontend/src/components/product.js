import axios from 'axios'
import React, { useState, useEffect } from 'react';
import clothes from "../images/clothes.png"

const ProductList = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/product/v1/products/');
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
      
      <div className='products'>
        {details.length > 0 ? (
          details.map((output, index) => (
            <div key={index}>
              <a href='#'>
                <div className='product'>
                  <img src={clothes} alt=""/>
                </div>
              </a>
              <div className='product_footer'>
                <a href="#">
                  <h1>{output.name}</h1>
                </a>
                <p>{output.price}</p>
              </div>
              <div>
                <button className='add-cart-button'>Add to cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    
  );
}

const Product = () => {
  

  return (
    <>
    </>
  );
}
 /*
 <ul>
              <li>{output.name}</li>
              <li>{output.code}</li>
            </ul>*/

/*
function Product({ nombre, descripcion, precio }) {
  return (
    <div className="product">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}
*/
export  {Product,ProductList};