import React from "react";
import ReactDOM from 'react-dom';
import Questions from "./components/Questions";
import logo from "./assets/images/logo.png"
import logo2 from "./assets/images/logo-pequeno.png"

function App(){

    const arr = [];
    
    const [start,setStart] = React.useState('login');
    const [display2,setDisplay2] = React.useState('hidden');

    return(
        <>
             <div className={start}>
                <img className='logo-img' src={logo} alt=""></img>
                <h1>ZapRecall</h1>
                <button onClick={() => {setStart('login hidden');setDisplay2(' ')}}>Iniciar Recall!</button>
            </div>

            <div className={display2}>
                <header >
                    <img src={logo2} alt=""></img>
                    <h1>ZapRecall</h1>
                </header>

                <content>
                    <ul>
                        <Questions />
                    </ul>
                </content>
                <div className="espaço"></div>
                <footer className="bottom">
                    <h3>{arr.length}/8 Concluídos</h3>
                    <div>
                        {arr}
                    </div>
                </footer>
            </div> 
        </>  
    );
}

ReactDOM.render(<App/>,document.querySelector('.root'));