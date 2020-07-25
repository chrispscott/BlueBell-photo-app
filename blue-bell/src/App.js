import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Userinfo from './components/Userinfo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Userinfo/>
    </div>
  );
}

export default App;
