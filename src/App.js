import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';



const App = ()=> {
  const [category, setCategory] = useState('general');

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}

export default App;
