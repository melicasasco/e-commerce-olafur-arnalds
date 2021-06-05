import React, { Component } from 'react';
import './App.css';
//Componentes
import Header from './Components/Header/Header';
import BtnComponent from './Components/BtnComponent/BtnComponent';
import Section from './Components/Section/Section';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//Material UI
import { Button } from '@material-ui/core';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ItemListContainer text={'Ólafur Arnalds Store'} />
        <Button variant="outlined" color="primary">Buy Now</Button>
      </div>
    );
  }
}


export default App;

