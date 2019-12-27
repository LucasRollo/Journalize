import React from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";




function CustomForm(props){

    function handleFormSubmit(e, requestType, articleID){
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;

        switch( requestType ){
            case 'post':
                return axios.post('http://localhost:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            case 'put':
                return axios.put(`http://localhost:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            
            
        }

    }

    return (
      <div>
        <Form onSubmit= {(e) => handleFormSubmit(e, props.requestType, props.articleID)}  >
          <Form.Item label="Title">
          </Form.Item>
          <Form.Item>
            <Input name="title" placeholder="Put a title here"/>
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{props.buttonText}</Button>
          </Form.Item>
        </Form>
      </div>
    );

}


export default CustomForm;
    
  

