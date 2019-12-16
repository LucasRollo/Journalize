import React from 'react';
import Login from './components/Login';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <div>
        <label htmlFor='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button onClick={handleSubmit}>have?</button>
      </div>

      <div>
        <h3 id='char-count'></h3>
      </div>
=======
      <Login />
>>>>>>> a469a77c6c33ef52588f5cb9d688a4b06b661a3e
    </div>
  );
}

export default App;