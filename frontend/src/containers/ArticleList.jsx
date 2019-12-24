import React, {useState} from "react";
import Article from "../components/Article";
import CustomForm from "../components/Form";
import axios from "axios";


function ArticleList() {
    const [articles, setArticles] = useState([]);
    //Try to find a better way to do this?
    const [gotData, setGotData] = useState(false);

    // Current Problem: if a boolean isn't checked, there will be an infinite loop of API calls
    if (!gotData){
        axios.get('http://localhost:8000/api/')
        .then(res => {
            setArticles(res.data);
         });

         setGotData(true);
    }

  return (
    <div>
      <Article data={articles} />
      <br />
      <h2>Create an article</h2>
      <CustomForm/>
    </div>
    );

}

// class ArticleList extends React.Component{

//     state = {
//         articles: []
//     }

//     componentDidMount(){
//         axios.get('http://localhost:8000/api/')
//             .then(res => {
//                 articles: res.data
//             });
//     }

//     render(){
//         return (
//             <Article data={this.state.articles} />
//         )
//     }

// }




export default ArticleList;


//Old Dummy Data
//
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: "http://ant.design",
//     title: `ant design part ${i}`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description:
//       "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
//   });
// }