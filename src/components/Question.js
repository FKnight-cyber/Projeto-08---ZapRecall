import setinha from "../assets/images/setinha.png";
import React from "react";

export default function Question({index, question, answer, setArrIcons, arrIcons}){

    const [pergunta, setPergunta] = React.useState('pergunta');
    const [questionBox, setQuestionBox] = React.useState('caixa-de-resposta hidden');
    const [answerBox, setAnswerBox] = React.useState('caixa-de-resposta hidden');
    const [icon,setIcon] = React.useState('play-outline');
    const [iconColor,setIconColor] = React.useState(' ');
    const [disable,setDisable] = React.useState(false);

    return(
        <li >
            <button disabled={disable} className={pergunta} onClick={() => {setPergunta('pergunta hidden');
            setQuestionBox('caixa-de-resposta selecionado')}}>
                <h2>Pergunta {index}</h2>
                <ion-icon className={iconColor} name={icon}></ion-icon>
            </button>
            <div className={questionBox}>
                <h3>{question}</h3>
                <img className="setinha" alt="" src={setinha}
                    onClick={() => {setQuestionBox('caixa-de-resposta hidden');setAnswerBox('caixa-de-resposta')}}></img>
            </div>
            <div className={answerBox}>
                <div className="resposta"><h3>{answer}</h3></div>
                <div className="opcoes">
                     <div className="op1" onClick={()=>{setArrIcons([...arrIcons, <ion-icon class='errado' name='close-circle'></ion-icon>] );setPergunta('pergunta errado');setAnswerBox('caixa-de-resposta hidden')
                        ;setIcon('close-circle');setIconColor('errado');setDisable(true)}}>
                        <h4>Não lembrei</h4>
                    </div>
                    <div className="op2" onClick={()=>{setArrIcons([...arrIcons, <ion-icon class='quase' name='help-circle'></ion-icon>] );setPergunta('pergunta quase');setAnswerBox('caixa-de-resposta hidden');
                    setIcon('help-circle');setIconColor('quase');setDisable(true)}}>
                        <h4>Quase não lembrei</h4>
                    </div>
                    <div className="op3" onClick={()=>{setArrIcons([...arrIcons, <ion-icon class='certo' name='checkmark-circle'></ion-icon>]);setPergunta('pergunta certo');setAnswerBox('caixa-de-resposta hidden');
                    setIcon('checkmark-circle');setIconColor('certo');setDisable(true)}}>
                        <h4>Zap!</h4>
                    </div>
                </div>
            </div>
                </li>
    );
}