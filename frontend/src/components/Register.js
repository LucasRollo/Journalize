import React, {Component} from 'react';
// import Component from 'react';
import axios from 'axios';


class Login extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submited");
        console.log(event);
    //   axios
    //     .get(`/char_count?text=${text}`).then(({data}) => {
    //       document.querySelector('#char-count').textContent = `${data.count} characters!`
    //     })
    //     .catch(err => console.log(err))
    }

    render(){
        return (
            <div className="Login">
                <h3>Login</h3>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='text' name="email" placeholder="email"/>
                <label htmlFor='password'>Password:</label>
                <input id='password' name="password" type='password' />
                <label htmlFor='confirm-password'>Password:</label>
                <input id='confirm-password' type='password' />
                
                <input type="submit" value="Submit"/>
              </form>
            </div>
          );
    }
}

export default Login;
