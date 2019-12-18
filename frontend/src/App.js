import React from 'react';
import Login from './components/Login';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <label htmlFor='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button>have?</button>
      </div>

      <div>
        <h3 id='char-count'></h3>
      </div>
    </div>
  );
}

export default App;
