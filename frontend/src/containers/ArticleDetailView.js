import React, {useState} from "react";
import axios from "axios";
import { Card } from 'antd';

import CustomForm from "../components/Form"

function ArticleDetail(props) {
    const [article, setArticle] = useState({});
    //Try to find a better way to do this?
    const [gotData, setGotData] = useState(false);

    const articleID = props.match.params.articleID;

    // Current Problem: if a boolean isn't checked, there will be an infinite loop of API calls
    if (!gotData){
        axios.get(`http://localhost:8000/api/${articleID}/`)
        .then(res => {
            setArticle(res.data);
         });

         setGotData(true);
    }

  return (
    <div>
        <Card title={article.title}>
            <p>{article.content}</p>
        </Card>
        <CustomForm />
    </div>
  
  );
}


export default ArticleDetail;

