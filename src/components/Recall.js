import React from 'react';

export default function Recall({recallZap}){
    return(
        <>
            <div className='recallButton'>
                {
                    <button onClick={()=> {recallZap()}} 
                    className='recall'>REINICIAR RECALL</button>
                }
            </div>
        </>
        
    );
}