import setinha from "../assets/images/setinha.png";

export default function Question({id, question, answer}){

    const [pergunta, setPergunta] = React.useState('pergunta');
    const [questionBox, setQuestionBox] = React.useState('caixa-de-resposta hidden');
    const [answerBox, setAnswerBox] = React.useState('caixa-de-resposta hidden');
    const [icon,setIcon] = React.useState('play-outline');
    const [iconColor,setIconColor] = React.useState(' ');
    const [disable,setDisable] = React.useState(false);

    return(
        <li >
            <button disabled={disable} className={pergunta} onClick={() => {setPergunta('pergunta hidden');setQuestionBox('caixa-de-resposta')}}>
                <h2>Pergunta {id}</h2>
                <ion-icon className={iconColor} name={icon}></ion-icon>
            </button>
            <div className={questionBox}>
                <h3>{question}</h3>
                <img className="setinha" alt="" src={setinha}
                    onClick={() => {setQuestionBox('caixa-de-resposta hidden');setAnswerBox('caixa-de-resposta')}}></img>
            </div>
            <div className={answerBox}>
                <h3>{answer}</h3>
                <div className="opcoes">
                     <div className="op1" onClick={()=>{setPergunta('pergunta errado');setAnswerBox('caixa-de-resposta hidden')
                        ;setIcon('close-circle');setIconColor('errado');setDisable(true)}}>
                        <h4>Não lembrei</h4>
                    </div>
                    <div className="op2" onClick={()=>{setPergunta('pergunta quase');setAnswerBox('caixa-de-resposta hidden');
                    setIcon('help-circle');setIconColor('quase');setDisable(true)}}>
                        <h4>Quase não lembrei</h4>
                    </div>
                    <div className="op3" onClick={()=>{setPergunta('pergunta certo');setAnswerBox('caixa-de-resposta hidden');
                    setIcon('checkmark-circle');setIconColor('certo');setDisable(true)}}>
                        <h4>Zap!</h4>
                    </div>
                </div>
            </div>
                </li>
    );
}