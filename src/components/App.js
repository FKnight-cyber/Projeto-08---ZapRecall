import React from "react";
import Questions from "./Questions"
import Login from "./Login";
import Footer from "./Footer";
import logo2 from "../assets/images/logo-pequeno.png";
import Win from "./Win";
import Fail from "./Fail";

export default function App(){
    const [start,setStart] = React.useState('login');
    const [display2,setDisplay2] = React.useState('hidden');
    const [arrIcons,setArrIcons] = React.useState([]);
    const [resultWin,setResultWin] = React.useState('');
    const [resultFail,setResultFail] = React.useState('');

    return(
        <>
            <Login start={start} setStart={setStart} setDisplay2={setDisplay2}/>
            <div className={display2}>
                <header >
                    <img src={logo2} alt=""></img>
                    <h1>ZapRecall</h1>
                </header>

                <content>
                    <ul>
                        <Questions setArrIcons={setArrIcons} arrIcons={arrIcons} />
                    </ul>
                </content>
                <div className="espaço"></div>
                {
                    resultWin === 'Win' ? <Win /> : ''
                }
                {
                    resultFail === 'Fail' ? <Fail /> : ''
                }
                <Footer arrIcons={arrIcons} setResultWin={setResultWin} setResultFail={setResultFail} />
            </div> 
        </>  
    );
}