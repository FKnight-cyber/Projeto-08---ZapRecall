import React from 'react'
import logo from '../assets/images/logo.png'

export default function Login({start,setStart,setDisplay2}){
    return(
        <div className={start}>
                <img className='logo-img' src={logo} alt=""></img>
                <h1>ZapRecall</h1>
                <button onClick={() => {setStart('login hidden');setDisplay2(' ')}}>Iniciar Recall!</button>
        </div>
    );
}