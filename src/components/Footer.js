import React from 'react';
import Recall from './Recall';
import Win from './Win';
import Fail from './Fail';
import WinTotal from './WinTotal';

export default function Footer({footerMethods,recallZap}){

    const {
        arrIcons,
        resultWin,
        resultFail,
        setResultWin,
        setResultFail,
        myQuestions,
        setInput,
        input,
        deckLength
    } = footerMethods
    
    if(arrIcons.length === deckLength.length ){
        const checkArr = arrIcons.map(a => a.props.name);
        const correctAnswers = countItem(checkArr,'checkmark-circle');
        const semiAnswers = countItem(checkArr,'help-circle');

        let sum = correctAnswers + semiAnswers;

        if(correctAnswers < input){
            setResultWin('')
            setResultFail('Fail')
        }
        if(correctAnswers >= input && sum === deckLength.length){
            setResultWin('WinTotal')
            setResultFail('')
        }
        if(correctAnswers >= input && sum !== deckLength.length){
            setResultWin('Win')
            setResultFail('')
        }
    }

    return(
        <>   
            {
                arrIcons.length === deckLength.length && deckLength > 0 ? <div className="espaço2"></div> : ''
            }
            <footer className="bottom">
                {
                    resultWin === 'WinTotal' ? <WinTotal /> : ''
                }
                {
                    resultWin === 'Win' ? <Win /> : ''
                }
                {
                    resultFail === 'Fail' ? <Fail /> : ''
                }
                <div className='progresso'>
                    <h3>{arrIcons.length}/{deckLength.length} Concluídos</h3>
                    <div>
                        {arrIcons}
                    </div>
                </div>
                    {
                        arrIcons.length === deckLength.length ? <Recall recallZap={recallZap}
                        myQuestions={myQuestions} setInput={setInput} /> : ''
                    }
            </footer> 
        </>
    );
}

function countItem(array, e){
    return array.filter(a => a === e).length
}