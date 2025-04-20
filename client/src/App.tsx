import { useState } from 'react';
import Main from './pages/MainPage.tsx';
import Test from './pages/TestPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
