import React from "react";
import Question from "./Question";

let check;
let perguntas = [];

const decks =
        {
            java:[
            {
                question: 'O que é JSX?',
                answer: 'Uma extensão de linguagem do JavaScript'
            },
            {
                question: 'O React é __',
                answer: 'uma biblioteca JavaScript para construção de interfaces'
            },
            {
                question: 'Componentes devem iniciar com __ ',
                answer: 'letra maiúscula'
            },
            {
                question: 'Podemos colocar __ dentro do JSX ',
                answer: 'expressões'
            },
            {
                question: 'O ReactDOM nos ajuda __ ',
                answer: 'interagindo com a DOM para colocar componentes React na mesma'
            },
            {
                question: 'Usamos o npm para __',
                answer: 'gerenciar os pacotes necessários e suas dependências'
            },
            {
                question: 'Usamos props para __',
                answer: 'passar diferentes informações para componentes '
            },
            {
                question: 'Usamos estado (state) para __',
                answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
            }
        ],
        css:[
            {
                question: "Qual o atributo que pode mudar o estilo da tag?",
                answer: 'style'
            },
            {
                question: 'Como é chamado quando se escreve o CSS direto na tag usando o atributo style?',
                answer: 'inline style'
            },
            {
                question: 'O que é um seletor?',
                answer: 'É o parâmetro CSS que seleciona o elemento que você quer estilizar.'
            },
            {
                question: 'Qual atributo a tag link usa para saber o relacionamento do link com o documento atual?',
                answer: 'rel'
            },
            {
                question: 'Quais são os 3 tipos de famílias de fontes que podem ser usadas por padrão?',
                answer: 'Monospace, Serif, Sans-Serif'
            },
            {
                question: 'Como criar um link que não aponta pra lugar algum?',
                answer: '<a href="#">'
            },
            {
                question: 'Um radio button tem que estar dentro de qual elemento?',
                answer: 'label'
            },
            {
                question: 'Qual a utilidade do radio button?',
                answer: 'Fazer com que o usuário escolha uma, e apenas uma, das opções pré-definidas.'
            }
        ],
        naruto:[
            {
                question: 'Qual foi a única aposta que a Tsunade ganhou?',
                answer: 'A aposta que o Jiraiya iria morrer'
            },
            {
                question: 'Qual o primeiro jutsu proibido que o Naruto aprende?',
                answer: 'Kage bunshin no jutsu'
            },
            {
                question: 'Que personagem de Naruto ganharia facilmente do Kuririn?',
                answer: 'Esse personagem não existe'
            },
            {
                question: 'No arco final, Madara arranca o sharingan do Kakashi e usa a técnica instantaneamente, por quê?',
                answer: 'Autor da obra se perdeu na própria história.'
            },
            {
                question: 'Qual o jutsu mais poderoso apresentado no universo de Naruto?',
                answer: 'Discurso-no jutsu'
            },
            {
                question: 'Qual o nome do primeiro filho do Naruto?',
                answer: 'Onbu'
            },
            {
                question: 'O que significa dattebayo?',
                answer: '"to certo", "é isso", coisas do tipo!'
            },
            {
                question: 'Waifu?',
                answer: 'Hinata'
            }
        ],
        zeno:[
            {
                question: 'Quem é o mais humilde?',
                answer: 'Zeno'
            },
            {
                question: 'No meio da dificuldade encontra-se a oportunidade.',
                answer: 'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.'
            },
            {
                question: 'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
                answer: 'É parte da cura o desejo de ser curado.'
            },
            {
                question: 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
                answer: 'Imagine uma nova história para sua vida e acredite nela.'
            },
            {
                question: 'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
                answer: 'Você precisa fazer aquilo que pensa que não é capaz de fazer.'
            },
            {
                question: 'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
                answer: 'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'
            },
            {
                question: 'Os problemas são oportunidades para se mostrar o que sabe.',
                answer: 'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.'
            },
            {
                question: 'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo',
                answer: 'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido'
            }
        ],
        lele:[
            {
                question: 'Foque na base muscular',
                answer: 'É importante dar muita atenção a sua base muscular, pois é o que vai atingir seu corpo inteiro.'
            },
            {
                question: 'Tenha treinos refinados para complementar os resultados',
                answer: 'Se a ideia do bodybuilding é “construir o corpo”, é importante focar no treino de hipertrofia de uma maneira geral, mas é bom lembrar que você também deve incorporar algumas atividades que trabalhem cada região de forma mais específica.'
            },
            {
                question: 'Concilie com exercícios aeróbicos',
                answer: 'As atividades aeróbicas devem acontecer de duas a três vezes por semana, pois assim fica mais fácil queimar a gordura extra e conquistar os resultados com mais facilidade.'
            },
            {
                question: 'Aposte no período de descanso',
                answer: 'É durante o descanso da noite que acontece a síntese muscular, ou seja, o período em que os músculos verdadeiramente crescem.'
            },
            {
                question: 'Motivação no bodybuilding: caminho para resultados a longo prazo',
                answer: 'A motivação bodybuilding é um dos itens mais importantes quando o assunto é modelar o corpo, já que o processo é longo e os resultados de qualidade e definitivos vêm à longo prazo.'
            },
            {
                question: 'Escolha uma academia ou treinador de altíssima qualidade',
                answer: 'A academia e o treinador são dois pontos cruciais para quem quer ser bem-sucedido nesse sentido. E não é para menos, já que os dois tem relação direta com o corpo que você pretende formar.'
            },
            {
                question: 'Defina metas de desenvolvimento alcançáveis',
                answer: 'Como você deve imaginar, essa é uma forma de controlar a forma como vai treinar e desenvolver seu corpo, a fim de que não saia treinando de maneira desenfreada, assim cometendo erros, e correndo risco de obter lesões.'
            },
            {
                question: 'Compreenda as vantagens de ser um bodybuilder natural',
                answer: 'Somente creatina e bastante proteína MONSTRO'
            }
        ]
    }

    decks.java.sort(embaralhar);
    decks.css.sort(embaralhar);
    decks.naruto.sort(embaralhar);
    decks.lele.sort(embaralhar);
    decks.zeno.sort(embaralhar);
    
export default function Questions({questionMethods}){

    const  {
        setArrIcons,
        arrIcons,
        myQuestions,
        setMyQuestions,
        selectedDeck
    } = questionMethods

    check = selectedDeck;


    if(check === 'java'){
        perguntas = decks.java;
    }

    if(check === ''){
        perguntas = decks.java;
    }

    if(check === 'css'){
        perguntas = decks.css;
    }

    if(check === 'naruto'){
        perguntas = decks.naruto;
    }
    if(check === 'zeno'){
        perguntas = decks.zeno;
    }
    if(check === 'lele'){
        perguntas = decks.lele;
    }

    return(
            perguntas.map((a,index) => <Question index={perguntas.indexOf(a)+1} 
            key={index} id={a.id} question={a.question}
            answer={a.answer} setArrIcons={setArrIcons} 
            arrIcons={arrIcons} myQuestions={myQuestions} setMyQuestions={setMyQuestions} />)     
    );
}

function embaralhar(){
    return Math.random() - 0.5;
}

