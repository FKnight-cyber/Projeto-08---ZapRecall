import sad from '../assets/images/sad.png'
export default function Fail(){
    return(
        <>
        <div className="espaço2"></div>
        <div className="resultado">
            <div className="resultTop">
                <img alt="" src={sad}></img>
                <h2>Putz!</h2>
            </div>
            <div className="resultBottom">
                <h4>Ainda faltam alguns... Mas não desanime!</h4>
            </div>
        </div>
        </>
    );
}