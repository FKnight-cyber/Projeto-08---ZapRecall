import React from 'react';
import Recall from './Recall';
import Win from './Win';
import Fail from './Fail';

export default function Footer({arrIcons, setResultWin,setResultFail,resultWin,resultFail,
setDisplay2,setStart, setArrIcons}){
    
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
            {
                arrIcons.length === 8 ? <div className="espaço2"></div> : ''
            }
            <footer className="bottom">
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
                        arrIcons.length === 8 ? <Recall setArrIcons={setArrIcons} setResultWin={setResultWin}
                        setResultFail={setResultFail} setDisplay2={setDisplay2} setStart={setStart} /> : ''
                    }
            </footer> 
        </>
    );
}