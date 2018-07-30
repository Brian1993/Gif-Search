import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './component/header';
import PicHolder from './component/picholder';
import Loading from './component/loading';
class App extends Component {
  constructor(){
    super();
    this.state={
      gifs :[],
    

    }
  }


/////////////////////////////
////   function 
/////////////////////////////
   
performSearch =(query ='cat') =>{
  console.log(query);
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
  .then(res =>this.setState({
        gifs:res.data.data,
        loading:false
      })
    
   )
  .catch(err=>console.log("Fetching error : "+err));
}


/////////////////////////////
////   componentDidMount
/////////////////////////////
  componentDidMount(){
    
      this.performSearch();
  }

  render() {
    return (
      <div className="App container">
          <Header onSearch= {this.performSearch}/>   
          <PicHolder data={this.state.gifs}/>
           
      </div>
    );
  }
}

export default App;
