import React from 'react'
import './style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'


function App() {
  return (
    <div className="body">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
