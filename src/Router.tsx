import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Question from './routes/main/Question';
import NotFound from './routes/NotFound';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/diary' element={<Question/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
