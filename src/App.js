import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tq from './tq';
import Heart from './heart';
import Trail from './Trail';

export default function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path='/' exact element={<Trail/>} />
        <Route path='/tq' element={<Tq/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
