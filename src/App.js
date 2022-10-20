import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Description from './home/Description';

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element = {<MovieList/>} />
        <Route path='description/:id' element = {<Description/>} />
      </Routes>

    </div>
  );
}

export default App;
