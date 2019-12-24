import React from "react";
import { Form, Input, Button } from 'antd';




function CustomForm(){

    function handleFormSubmit(e){
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;

        console.log(title, content);
    }

    return (
      <div>
        <Form onSubmit={handleFormSubmit}>
          <Form.Item label="Title">
          </Form.Item>
          <Form.Item>
            <Input name="title" placeholder="Put a title here"/>
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );

}


export default CustomForm;
    
  

