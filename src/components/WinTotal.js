import party from '../assets/images/party.png'
export default function WinTotal(){
    
    return(
        <>
            <div className="resultado">
                <div className="resultTop">
                    <img alt="" src={party}></img>
                    <h2>Parabéns!</h2>
                </div>
                <div className="resultBottom">
                    <h4>Você não esqueceu de nenhum flashcard!</h4>
                </div>
            </div>
        </>
    );
}