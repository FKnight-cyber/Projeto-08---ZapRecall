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
    const [pergunta, setPergunta] = React.useState('pergunta');
    const [questionBox, setQuestionBox] = React.useState('caixa-de-resposta hidden');
    const [answerBox, setAnswerBox] = React.useState('caixa-de-resposta hidden');
    const [icon,setIcon] = React.useState('play-outline');
    const [iconColor,setIconColor] = React.useState(' ');
    const [disable,setDisable] = React.useState(false);

    const [perguntass,setPerguntass] = React.useState({
        pergunta,
        setPergunta,
        questionBox,
        setQuestionBox,
        answerBox,
        setAnswerBox,
        icon,
        setIcon,
        iconColor,
        setIconColor,
        disable,
        setDisable
                    })
    
    return(
        <>
            <Login start={start} setStart={setStart} setDisplay2={setDisplay2} />
            <div className={display2}>
                <header >
                    <img src={logo2} alt=""></img>
                    <h1>ZapRecall</h1>
                </header>

                <content>
                    <ul>
                        <Questions setArrIcons={setArrIcons} arrIcons={arrIcons} perguntas={perguntass}
                        setPerguntass={setPerguntass} />
                    </ul>
                </content>
                <div className="espaço"></div>
                
                <Footer arrIcons={arrIcons} resultWin={resultWin} resultFail={resultFail} 
                setResultWin={setResultWin} setResultFail={setResultFail}
                setDisplay2={setDisplay2} setStart={setStart} setArrIcons={setArrIcons} />
            </div> 
        </>  
    );
}