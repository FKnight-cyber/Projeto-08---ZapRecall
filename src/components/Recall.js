import React from 'react';

export default function Recall({setArrIcons,setResultFail,setResultWin,setDisplay2,setStart,
setPergunta}){
    return(
        <>
            <div className='recallButton'>
                {
                    <button onClick={()=> {setArrIcons([]);setResultFail('');setResultWin('');
                    setDisplay2('hidden');setStart('login');setPergunta('pergunta')}} 
                    className='recall'>REINICIAR RECALL</button>
                }
            </div>
        </>
        
    );
}