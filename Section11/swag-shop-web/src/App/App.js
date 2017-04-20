import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {
    
    constructor(props) {
        super(props);
        
        //Bind functions
        this.loadData = this.loadData.bind(this);
        
        this.loadData();
    }  
    
    loadData = () => {
        http.getProducts().then(products => {
            console.log(products);
        }, err => {
            console.log(err);
        })
    }
    
    
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to The Swag Shop</h2>
                </div>
                <div className="container App-main">
                    <div className="row">
                        <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://is.alicdn.com/img/pb/762/913/379/379913762_774.jpg"/> 
                        <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://is.alicdn.com/img/pb/762/913/379/379913762_774.jpg"/> 
                        <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://is.alicdn.com/img/pb/762/913/379/379913762_774.jpg"/> 
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default App;
