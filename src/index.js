import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Accounts from './pages/Accounts';
import Borrowing from './pages/Borrowing';
import Joinus from './pages/Joinus';
import Savings from './pages/Savings';
import Customisecard from './pages/Customisecard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='accounts' element={<Accounts />} />
      <Route path='borrowing' element={<Borrowing />} />
      <Route path='joinus' element={<Joinus />} />
      <Route path='savings' element={<Savings />} />
      <Route path='customisecard' element={<Customisecard />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
