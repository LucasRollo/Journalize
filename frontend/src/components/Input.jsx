import React from 'react';

function Input(props){
    return <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>
}

export default Input;