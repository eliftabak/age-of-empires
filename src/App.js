import React from 'react';
import './App.scss';
import { Routes, Route,  } from "react-router-dom";
import Home from './components/home';
import UnitList from './components/unitList';
import UnitDetail from './components/unitDetail';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<UnitList />} />
        <Route path="detail/:unitName" element={<UnitDetail />} />
      </Routes>
    </div>
  );
}

export default App;
