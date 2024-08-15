//import axios from 'axios'
import React from 'react'
import Home from './components/home';

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;

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