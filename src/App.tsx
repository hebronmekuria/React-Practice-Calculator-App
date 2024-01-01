// App.js

import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButtons = () => {
    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    return buttons.map((button) => (
      <button key={button} onClick={() => handleButtonClick(button)}>
        {button}
      </button>
    ));
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <span className="result">{result}</span>
        </div>
        <div className="buttons">{renderButtons()}</div>
      </div>
    </div>
  );
}

export default App;
