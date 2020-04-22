import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Converter';

function App() {
  return (
    <div className="App">
      <Conversor currencyFrom="USD" currencyTo="BRL"></Conversor>
      <Conversor currencyFrom="BRL" currencyTo="USD"></Conversor>
    </div>
  );
}

export default App;
