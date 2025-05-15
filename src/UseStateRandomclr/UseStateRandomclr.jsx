import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UseStateRandomclr = () => {
  const [randomColor, setColor] = useState({
    color: '',
    btnevent: false,
    announcementy: '',
  });

  function generateRandomcolor() {
    let colorChars = '1234567890abcdef';
    let colourCode = '#';
    for (let i = 0; i < 6; i++) {
      let colorsIndex = Math.floor(Math.random() * colorChars.length);
      colourCode += colorChars[colorsIndex];
    }

    // Update color first
    setColor({
      color: colourCode,
      btnevent: true,
      announcementy: '',
    });

    // Copy color to clipboard and show message
    navigator.clipboard.writeText(colourCode).then(() => {
// setTimeout(()=>{
//   setColor((prevstate)=>({
// ...prevstate,
// announcementy:'colour code copid'
//   }));
// },200)

      
        setColor((prev) => ({
          ...prev,
          announcementy: 'Color code copied!',
        }
          ));
    });
  }
setTimeout(() => {
        setColor((prev) => ({
          ...prev,
          announcementy: '',
        }));
      }, 1500);

  return (
    <div
      style={{
        backgroundColor: randomColor.color,
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#000',
      }}
    >
      <p>{randomColor.announcementy}</p>
      <Button onClick={generateRandomcolor}>
        Generate Random Color
      </Button>
    </div>
  );
};

export default UseStateRandomclr;
