import React from 'react';
import './App.scss';
import { Routes, Route,  } from "react-router-dom";
import Home from './components/home';
import UnitList from './components/unitList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<UnitList />} />
      </Routes>
    </div>
  );
}

export default App;
