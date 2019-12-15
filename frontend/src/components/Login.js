import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import Component from 'react';
import Input from './Input';
import axios from 'axios';




function Login(){
    const [credentials,setCred] = useState({
        email:"",
        password:""
    });

    function changeCred(e){
        const {name, value} = e.target;
        setCred((previousState)=>(
            {
                ...previousState,
                [name]:value
            }
        ));
    }
    function submit(e){
        e.preventDefault();
        axios({
            method: 'post',
            url: '/accounts/login/',
            data: credentials
          });
    }
        return (
            <div className="Login">
                <h3>Login</h3>
              <form>
                <Input 
                    type='text' 
                    placeholder='email' 
                    name='email'
                    onChange={changeCred}
                /> 
                <br/>
                <Input 
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    onChange={changeCred}
                />
                <br/>
                <button onClick={submit}>Login</button>
              </form>
            </div>
          );
    }

export default Login;
