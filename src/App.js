import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import './App.css';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState("blue");
  let setStyle = () => {
    if (color === 'red') {
      document.body.style.backgroundColor = "#570b0b";
      document.body.style.color = '#fff';

    }
    if (color === 'blue') {
      document.body.style.backgroundColor = "#0a1652";
      document.body.style.color = '#fff';
    }
    if (color === 'green') {
      document.body.style.backgroundColor = "#084013";
      document.body.style.color = '#fff';

    }
  }
  let handleDarkMode = (event) => {
    const background = event.target.getAttribute('src');
    const backgroundName = background.substring(background.lastIndexOf('/') + 1);
    const Color = backgroundName.substring(0, backgroundName.lastIndexOf('.'));
    if (Color.endsWith('t')) {
      setColor(Color.substring(0, Color.length - 5));
      setStyle();
    } else if (Color.endsWith('k')) {
      setColor(Color.substring(0, Color.length - 4));
      setStyle();
    }
    if (mode === 'light') {
      setMode('dark');

    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#1c1c1c';
      
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={handleDarkMode} colour={color} />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" mode={mode} colour={color} />
      </div>
    </>
  )
}

export default App;
