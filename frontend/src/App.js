import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import './App.css';

import CustomLayout from "./containers/CustomLayout";
import ArticleList from "./containers/ArticleList";

function App() {
  return (
    <div>
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;

