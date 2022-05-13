import React from 'react';

export default function Footer({arrIcons, setResultWin,setResultFail}){
    
    if(arrIcons.length === 8 ){
        const checkArr = arrIcons.map(a => a.props.name);
        if(checkArr.includes('close-circle')){
            setResultWin('')
            setResultFail('Fail')
        }else{
            setResultWin('Win')
            setResultFail('')
        }
    }

    return(
        <>   
            <footer className="bottom">
                <h3>{arrIcons.length}/8 Concluídos</h3>
                <div>
                    {arrIcons}
                </div>
                <button className='recall'>REINICIAR RECALL</button>
            </footer>
        </>
    );
}