import React from "react";
import Question from "./Question";

const deck =
        [
            {
                question: 'O que é JSX?',
                answer: 'Uma extensão de linguagem do JavaScript'
            },
            {
                question: 'O React é __',
                answer: 'uma biblioteca JavaScript para construção de interfaces'
            },
            {
                question: 'Componentes devem iniciar com __ ',
                answer: 'letra maiúscula'
            },
            {
                question: 'Podemos colocar __ dentro do JSX ',
                answer: 'expressões'
            },
            {
                question: 'O ReactDOM nos ajuda __ ',
                answer: 'interagindo com a DOM para colocar componentes React na mesma'
            },
            {
                question: 'Usamos o npm para __',
                answer: 'gerenciar os pacotes necessários e suas dependências'
            },
            {
                question: 'Usamos props para __',
                answer: 'passar diferentes informações para componentes '
            },
            {
                question: 'Usamos estado (state) para __',
                answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
            }
        ]

    const perguntas = [...deck];
    perguntas.sort(embaralhar);

export default function Questions({setArrIcons,arrIcons}){
    return(
            perguntas.map((a,index) => <Question index={perguntas.indexOf(a)+1} 
            key={index} id={a.id} question={a.question}
            answer={a.answer} setArrIcons={setArrIcons} 
            arrIcons={arrIcons} />)     
    );
}

function embaralhar(){
    return Math.random() - 0.5;
}

