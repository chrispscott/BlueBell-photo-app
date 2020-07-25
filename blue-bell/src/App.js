import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Userinfo from './components/Userinfo';
import Contentarea from './components/Contentarea';

function App() {
  return (
    <div className="App">
      <Header/>
      <Userinfo/>
      <Contentarea/>
    </div>
  );
}

export default App;
