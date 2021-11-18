import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import DogList from './components/DogList';
import DeedList from './components/DeedList';
import DogHouse from './components/DogHouse';
import ErrorPage from './components/ErrorPage';
import AddDog from './components/AddDog';

function App() {
  return (
    <Router>
    <div className="App">

      <Nav />
      <Routes>
      <Route path="/" element={<DogHouse />} /> 
      <Route path="/dogs" element={<DogList />} />
      <Route path="/deeds" element={<DeedList />} />
      <Route element={<ErrorPage />} />
      <Route path="/dogs/add" element={<AddDog />} />

      </Routes>
  
    </div>
    </Router>
  );
}

export default App;
