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
        input
    } = footerMethods
    
    if(arrIcons.length === 8 ){
        const checkArr = arrIcons.map(a => a.props.name);
        const correctAnswers = countItem(checkArr,'checkmark-circle');
        const semiAnswers = countItem(checkArr,'help-circle');

        let sum = correctAnswers + semiAnswers;

        if(correctAnswers < input){
            setResultWin('')
            setResultFail('Fail')
        }
        if(correctAnswers >= input && sum === 8){
            setResultWin('WinTotal')
            setResultFail('')
        }
        if(correctAnswers >= input && sum !== 8){
            setResultWin('Win')
            setResultFail('')
        }
    }

    return(
        <>   
            {
                arrIcons.length === 8 ? <div className="espaço2"></div> : ''
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
                    <h3>{arrIcons.length}/8 Concluídos</h3>
                    <div>
                        {arrIcons}
                    </div>
                </div>
                    {
                        arrIcons.length === 8 ? <Recall recallZap={recallZap}
                        myQuestions={myQuestions} setInput={setInput} /> : ''
                    }
            </footer> 
        </>
    );
}

function countItem(array, e){
    return array.filter(a => a === e).length
}