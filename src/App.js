import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import './App.css';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('none');
  console.log(color);
  let handleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(10 22 40)';
      document.body.style.color = '#fff';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#1c1c1c';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeColor={setColor} toggle={handleDarkMode} />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" changecolor={setColor} mode={mode}/>
      </div>
    </>
  )
}

export default App;
