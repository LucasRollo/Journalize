import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes'
import 'antd/dist/antd.css';
import './App.css';

import CustomLayout from "./containers/CustomLayout";


function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;

