import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Userinfo from './components/Userinfo';
import Contentarea from './components/Contentarea';
import Navarea from './components/Navarea';

function App() {
  return (
    <div className="App">
      <Header/>
      <Userinfo/>
      <Contentarea/>
      <Navarea/>
    </div>
  );
}

export default App;
