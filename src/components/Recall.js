import React from 'react';

export default function Recall({recallZap,myQuestions}){

    function resetQuestions(){
        myQuestions.map(e => {
            e.setPergunta('pergunta');
            e.setQuestionBox('caixa-de-resposta hidden');
            e.setAnswerBox('caixa-de-resposta hidden');
            e.setIcon('play-outline');
            e.setIconColor(' ');
            e.setDisable(false);
        })
    }

    return(
        <>
            <div className='recallButton'>
                {
                    <button onClick={()=> {resetQuestions();recallZap()}} 
                    className='recall'>REINICIAR RECALL</button>
                }
            </div>
        </>
        
    );
}