import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import TextLockUp from './components/TextLockUp'


const App = () => {
  return (
  <div>
      <Navbar />
      <TextLockUp />
  </div>
  );
}

export default App;