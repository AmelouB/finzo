import React from 'react';
import '../App.css';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';
import BankCardForm from '../components/common/bankcardform';

function Customisecard() {
  return (
    <div className='App'>
      <Navbar />
      <BankCardForm />
      <Footer />
    </div>
  );
}

export default Customisecard;
