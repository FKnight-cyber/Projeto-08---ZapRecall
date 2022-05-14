import React from "react";
import Questions from "./Questions"
import Login from "./Login";
import Footer from "./Footer";
import logo2 from "../assets/images/logo-pequeno.png";


export default function App(){
    const [start,setStart] = React.useState('login');
    const [display2,setDisplay2] = React.useState('hidden');
    const [arrIcons,setArrIcons] = React.useState([]);
    const [resultWin,setResultWin] = React.useState('');
    const [resultFail,setResultFail] = React.useState('');
    const [myQuestions,setMyQuestions] = React.useState([]);
    const [input,setInput] = React.useState('');
    const [disableLogin,setDisableLogin] = React.useState(true);

    function recallZap(){
        setStart('login');
        setDisplay2('hidden');
        setArrIcons([]);
        setResultWin('');
        setResultFail('');
    }

    const questionMethods = {
        setArrIcons,
        arrIcons,
        myQuestions,
        setMyQuestions
    }

    const footerMethods ={
        arrIcons,
        resultWin,
        resultFail,
        setResultWin,
        setResultFail,
        myQuestions,
        setInput,
        input
    }

    const loginMethods = {
        start,
        setStart,
        setDisplay2,
        input,
        setInput,
        disableLogin,
        setDisableLogin
    }
    
    return(
        <>
            <Login loginMethods={loginMethods} />
            <div className={display2}>
                <header >
                    <img src={logo2} alt=""></img>
                    <h1>ZapRecall</h1>
                </header>

                <content>
                    <ul>
                        <Questions questionMethods={questionMethods} />
                    </ul>
                </content>
                <div className="espaço"></div>
                
                <Footer footerMethods={footerMethods} recallZap={recallZap} />
            </div> 
        </>  
    );
}