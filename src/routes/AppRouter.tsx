import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'


import { SeeTrack } from '../pages/SeeTrack';
import { HomeList } from '../pages/HomeList';

 const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeList />} />   
            <Route path="/track" element={<SeeTrack />} />   
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;