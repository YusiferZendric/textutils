import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import './App.css';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  let handleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(11 13 16)';
      document.body.style.color = '#fff';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#1c1c1c';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={handleDarkMode} />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  )
}

export default App;
