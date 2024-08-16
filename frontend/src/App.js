import axios from 'axios'
import Home from './components/home';
import React, { useState, useEffect } from 'react';
import {Product, ProductList} from './components/product';
import { Header  } from './components/header';
//import 'boxicons';

function App() {
  return (
    <div className='App'>
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;



/*
const App = () => {
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
    <div>
      <header>Data generated from Django</header>
      
      {details.length > 0 ? (
        details.map((output, index) => (
          <div key={index}>
            <ul>
              <li>{output.name}</li>
              <li>{output.code}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default App;

*/


/*
class App extends React.Component{
  state = {details: []}

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/product/v1/products/')
    .then( res =>{
      data = res.data;
      this.setState({
        details : data 
      });
    })
    .catch(err => {})  
  }

  render() {
    return (
      <div> 
        <header>Data generated from Django</header>
        {this.state.details.map((output,id) => (
          <div key = {id}>
          <ul>
          <li>{output.name}</li>
          <li>{output.code}</li>
          </ul>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
*/


/*
import React from 'react';
import HelloWorld from './HelloWorld';

function App(){
  return (
    <div className = "App">
      <HelloWorld/>
    </div>
  );
}
*/