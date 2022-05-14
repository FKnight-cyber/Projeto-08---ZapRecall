import React from 'react'
import logo from '../assets/images/logo.png'

export default function Login({loginMethods}){

    const {
        start,
        setStart,
        setDisplay2,
        input,
        setInput,
        disableLogin,
        setDisableLogin
    } = loginMethods
    
    const [k,setK] = React.useState(0);
    
            if(input.length < 1 && k!==0){
                setK(0);
                setDisableLogin(true);
            }

            if(!isNaN(input) && input >= 1 && input <= 8 && k!== 1){
                setDisableLogin(false);
                setK(1);
             }
            

    return(
        <div className={start}>
                <img className='logo-img' src={logo} alt=""></img>
                <h1>ZapRecall</h1>
                <input value={input} onChange={e=>setInput(e.target.value)}
                placeholder='Digite sua meta de zaps...' maxLength='1'></input>
                <button disabled={disableLogin} className='loginbutton' 
                onClick={() => {setStart('login hidden');setDisplay2(' ')}}>Iniciar Recall!</button>
        </div>
    );
}