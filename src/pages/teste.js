
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useSpring, animated } from 'react-spring';

import Header from '../components/Header';
import TimelineElement from '../components/TimelineElement';
import Background from '../components/Background';
import Definitions from '../components/Definitions';

import TechBackground from '../assets/backgroundCode.jpg';
import Caesar from '../components/cryptoModels/Caesar';

import CitalaImg from '../assets/citala.jpg';
import PolybiusImg from '../assets/Polybius_square.png';
import CeasarImg from '../assets/CifraCesar.jpg';
import AlkindImg from '../assets/Alkindi.png';
import { useEffect, useState } from 'react';


function Home() {
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(()=>{
    const handleScroll= ()=>{
      setTimelineHeight(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const timelineAnimation = useSpring({
    height: timelineHeight,
    config: {
      duration: 100, 
      tension: 170, 
      friction: 14,
      reset: true, 
    }
  })


  return (
    <div className='inset-0 z-0 overflow-x-hidden' >
      <Background />
      <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900 ">
        <Header/>

        <div className='relative'>
          <div className='w-full h-64 z-0 absolute -top-24'
            style={{
              backgroundImage: `url(${TechBackground})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <Definitions/>
        </div>
        <div className='relative'>
          
          <VerticalTimeline lineColor='rgb(39 39 42)'>
            <animated.div className=" w-2 bg-green-800 absolute top-0 bottom-0 left-1/2 -translate-x-[4px] rounded-md" style={timelineAnimation} /> 

            <TimelineElement date="Séc V - IV a.C.">
              <div className='flex font-poppins justify-center items-center flex-col gap-5'>
                  <h1 className='text-3xl text-emerald-600'>Citala Espartana</h1>
                  <p className='text-justify'>
                    Uma das formas mais antigas de criptografia é a Cítala, utilizada pelos generais espartanos ao mandar mensagens entre si. 
                    A cítala consiste em um pedaço de madeira a qual dois generais possuíam, sendo as duas de exato mesmo tamanho e grossura, 
                    dessa forma, se utilizava um pedaço fino de couro e o enrolavam na cítala e escreviam uma mensagem que seria lida na 
                    vertical ao enrolar o couro na madeira, junto a mensagem original haviam diversos símbolos aleatórios. Sendo assim, só 
                    uma pessoa com uma cítala idêntica poderia ver a combinação certa dos símbolos.
                  </p>
                  <img alt="" src={CitalaImg} className='rounded-lg w-[400px] absolute -left-[700px]'/>
              </div>
            </TimelineElement>

            <TimelineElement date="Séc IV a.C. - Séc I a.C">
              <div className='flex font-poppins justify-center items-center flex-col gap-5'>
                  <h1 className='text-3xl text-emerald-600'>Aeneas Tacticus</h1>

                  <p className='text-justify'>
                  Os gregos foram os inventores da primeira cifra de transposição. Aeneas Tacticus escreveu um livro no qual dedicou um capítulo para a criptografia, e Polybius criou o tabuleiro de Polybius
                  </p>
                  <img alt="" src={PolybiusImg} className='rounded-lg w-1/3 absolute left-[700px] top-20'/>
              </div>
            </TimelineElement>
            <TimelineElement date="58 a.C. – 51 a.C.">
              <div className='flex font-poppins justify-center items-center flex-col gap-5'>
                  <h1 className='text-3xl text-emerald-600'>Cifra de César</h1>

                  <p className='text-justify'>
                    Durante o período das Guerras da Gália, o Imperador Júlio César criou e utilizou um dos mais 
                    famosos métodos de criptografia, a Cifra de César.  Para poder enviar mensagens aos seus oficiais 
                    sem grandes consequências caso as mesmas fossem interceptadas, as mensagens eram escritas de forma 
                    que cada letra era substituída por um fator de k na ordem do alfabeto. Na época, o fator k era de 3, 
                    sendo assim, cada letra de uma palavra seria substituída pela letra 3 posições na sua frente do alfabeto, 
                    Exemplo: a palavra GUERRA em sua forma encriptada se torna JXHUUD.(essa é uma criptografia por substituição)
                  </p>
                  <Caesar/>
                  <img alt="" src={CeasarImg} className='rounded-lg w-1/2'/>
              </div>
            </TimelineElement>

            <TimelineElement date="Séc IX d. C. ">
              <div className='flex font-poppins justify-center items-center flex-col gap-5'>
                <h1 className='text-3xl text-emerald-600'>Al-kindi</h1>

                  <p className='text-justify'>
                    Durante a época de ouro islâmica, o acesso ao conhecimento foi mais abrangente e sua busca encorajada, 
                    isso permitiu que muitos grandes estudiosos se formassem, sendo um deles Al-Kindi. Al-Kindi foi responsável
                    pela tradução de muitos textos e mensagens criptografadas de origem grega e romana, mas graças ao seu 
                    acesso a estudos de Linguagem, Estatística e Matemática, ele foi capaz de desenvolver um método para 
                    descobrir o conteúdo de mensagens criptografadas, sendo método a Análise de Frequência. Como o próprio 
                    nome diz, ele tem como princípio ver qual o símbolo mais recorrente na mensagem e substituí-lo pela letra 
                    mais recorrente na língua,o segundo símbolo mais recorrente pela segunda letra mais recorrente e assim em 
                    diante. Tal método era tão eficiente que a cifra de césar foi facilmente decifrada por esse método, 
                    tornando-a ineficiente. 

                  </p>
                  <img alt="" src={AlkindImg} className='rounded-lg'/>
              </div>
            </TimelineElement>

            <TimelineElement date="Séc IX d. C. ">
              <div className='flex font-poppins justify-center items-center flex-col gap-5'>
                  <p className='text-justify'>
                    Século XX
                  </p>
                  <img alt="" src="" className='rounded-lg'/>
              </div>
            </TimelineElement>

            <TimelineElement date='2022'>
              <div className='flex justify-center items-center flex-col gap-'>
                <p>
                  Olha isso é uma imagem legal nada relacionada a criptografia
                </p>
                <div className='w-60 h-auto'>
                <img alt="" src="https://picsum.photos/100" className='rounded-md'/>
                </div>
              </div>
            </TimelineElement>

          </VerticalTimeline>
        </div>

        </div>
    </div>
  );
}

export default Home;
