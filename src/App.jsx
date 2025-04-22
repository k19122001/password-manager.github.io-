import { useEffect, useState } from 'react'

import './App.css'

import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Footer from './components/Footer';

import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  return (
    <>

    <Navbar/>
    <div className='min-h-100vh'>
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
