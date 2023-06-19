import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSpring, animated } from "react-spring";

import Header from "../components/Header";
import TimelineElement from "../components/TimelineElement";
import Background from "../components/Background";
import Definitions from "../components/Definitions";

import TechBackground from "../assets/Backgroundf.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Caesar from "../components/cryptoModels/Caesar";

import CitalaImg from "../assets/citala.jpg";
import VigenereImg from "../assets/Vigenere.png";
import PolybiusImg from "../assets/Polybius_square.png";
import Mesopotam from "../assets/mesopotamia.jpg";
import CeasarImg from "../assets/CifraCesar.jpg";
import AlkindImg from "../assets/Alkindi.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModelICon from "../components/ModelIcon";
import Vigenere from "../components/cryptoModels/Vigenere";

function Classic() {
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTimelineHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timelineAnimation = useSpring({
    height: timelineHeight,
    config: {
      duration: 100,
      tension: 170,
      friction: 14,
      reset: true,
    },
  });

  return (
    <div className="inset-0 z-0 overflow-x-hidden">
      <Background />
      <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900 ">
        <Header home />

        <div className="relative">
          <div
            className="w-full h-64 z-0 absolute -top-24"
            style={{
              backgroundImage: `url(${TechBackground})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Definitions
            title="Criptografia Clássica"
            text="Durante a antiguidade, as cifras se limitavam a substituições e transposições, sendo utilizadas para diversas finalidades, como enviar mensagens estratégicas durante tempos de guerra, proteger segredos comerciais ou até mesmo por motivos estéticos.            "
            type="classic"
          />
        </div>
        <div className="relative">
          <VerticalTimeline lineColor="rgb(39 39 42)" layout="1-column-left">
            <animated.div
              className=" w-2 bg-green-800 absolute top-0 bottom-0 translate-x-4 rounded-md"
              style={timelineAnimation}
            />

            <TimelineElement date="1900 a.C">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Os Egípcios</h1>
                <div className="flex gap-5 px-5">
                  <p className="text-justify">
                    O primeiro registro documentado do uso da criptografia
                    ocorreu na civilização egípcia, quando uma série de
                    hieróglifos decorativos e fora do padrão foi encontrada na
                    tumba de Khnumhotep II. Esses símbolos revelaram que havia
                    um significado adicional além daqueles que seriam
                    compreendidos sem um conhecimento avançado da língua. Apesar
                    de não ter sido utilizado exatamente para esconder
                    informações, foi o primeiro uso registrado de uma técnica de
                    criptografia na história.
                  </p>
                </div>
              </div>
            </TimelineElement>
            <TimelineElement date="1500 a.C">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">
                  Cifra Mesopotâmica
                </h1>
                <div className="flex gap-5 px-5">
                  <p className="text-justify">
                    A cifra mesopotâmica utilizou a criptografia para esconder a
                    fórmula do esmalte de cerâmica que utilizavam. Ela é o
                    primeiro exemplo do uso para esconder informação secreta.
                    Além dela, houve casos de utilização da criptografia em
                    praticamente todas as grandes civilizações antigas. Na Índia
                    antiga, um trabalho escrito por Kautilya descreve como
                    tarefas eram dadas para espiões com uma escrita oculta.
                  </p>
                  <img
                    alt=""
                    src={Mesopotam}
                    className="rounded-lg w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="Séc V - IV a.C.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Citala Espartana</h1>
                <div className="flex gap-5 px-5">
                  <p className="text-justify">
                    Uma das formas mais antigas de criptografia é a Cítala,
                    utilizada pelos generais espartanos ao mandar mensagens
                    entre si. A cítala consiste em um pedaço de madeira a qual
                    dois generais possuíam, sendo as duas de exato mesmo tamanho
                    e grossura, dessa forma, se utilizava um pedaço fino de
                    couro e o enrolavam na cítala e escreviam uma mensagem que
                    seria lida na vertical ao enrolar o couro na madeira, junto
                    a mensagem original haviam diversos símbolos aleatórios.
                    Sendo assim, só uma pessoa com uma cítala idêntica poderia
                    ver a combinação certa dos símbolos.
                  </p>
                  <img
                    alt=""
                    src={CitalaImg}
                    className="rounded-lg w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="Séc IV a.C. - Séc I a.C">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Aeneas Tacticus</h1>
                <div className="flex gap-5 w-full justify-evenly">
                  <p className="text-justify w-1/2">
                    Os gregos foram os inventores da primeira cifra de
                    transposição. Aeneas Tacticus escreveu um livro no qual
                    dedicou um capítulo para a criptografia, e Polybius criou o
                    tabuleiro de Polybius
                  </p>
                  <img
                    alt=""
                    src={PolybiusImg}
                    className="rounded-lg w-1/5 mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="58 a.C. – 51 a.C.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5 px-5">
                <h1 className="text-3xl text-emerald-600">Cifra de César</h1>
                <p className="text-justify">
                  Durante o período das Guerras da Gália, o Imperador Júlio
                  César criou e utilizou um dos mais famosos métodos de
                  criptografia, a Cifra de César. Para poder enviar mensagens
                  aos seus oficiais sem grandes consequências caso as mesmas
                  fossem interceptadas, as mensagens eram escritas de forma que
                  cada letra era substituída por um fator de k na ordem do
                  alfabeto. Na época, o fator k era de 3, sendo assim, cada
                  letra de uma palavra seria substituída pela letra 3 posições
                  na sua frente do alfabeto, Exemplo: a palavra GUERRA em sua
                  forma encriptada se torna JXHUUD.(essa é uma criptografia por
                  substituição)
                </p>
                <div className="flex gap-36 w-full">
                  <Caesar />
                  <img alt="" src={CeasarImg} className="rounded-lg w-2/5" />
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bdHteknuMQA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </TimelineElement>

            <TimelineElement date="Séc IX d. C. ">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Al-kindi</h1>
                <div className="flex font-poppins justify-center items-center flex-row gap-5 px-5">
                  <p className="text-justify">
                    Durante a Idade Média, os árabes contribuíram muito para os
                    processos criptográficos. Dentre eles, Al-Kindi foi
                    responsável pelo método da Análise de Frequência. Como o
                    próprio nome diz, ele tem como princípio ver qual o símbolo
                    mais recorrente na mensagem e substituí-lo pela letra mais
                    recorrente na língua,o segundo símbolo mais recorrente pela
                    segunda letra mais recorrente e assim em diante. Tal método
                    era tão eficiente que a cifra de césar foi facilmente
                    decifrada por esse método, tornando-a ineficiente.
                  </p>
                  <img alt="" src={AlkindImg} className="rounded-lg w-1/4" />
                </div>
              </div>
            </TimelineElement>
            <TimelineElement date="Séc IX d. C. ">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Cifra de Vigenère</h1>
                <div className="flex font-poppins justify-center items-center flex-col gap-5 px-5">
                  <p className="text-justify">
                    Com a transição para a Idade Moderna e a chegada do
                    movimento renascentista, novas cifras foram introduzidas,
                    com destaque para a Cifra de Vigenère, publicada por Giovan
                    Battista Bellaso e erroneamente atribuída a Blaise de
                    Vigenère. A cifra de Vigenère é um método de criptografia
                    polialfabética que usa uma palavra-chave para cifrar o texto
                    original. Cada letra da palavra-chave corresponde a um
                    deslocamento específico no alfabeto, e esses deslocamentos
                    são aplicados a cada letra do texto de forma repetitiva,
                    assim tornando-a mais segura que a Cifra de César, pois
                    dificulta a identificação de padrões no texto encriptado.
                    Somente 3 séculos depois ela foi decifrada por Friedrich
                    Kasiski.
                  </p>
                  <div className="flex gap-36 w-full justify-around">
                    <Vigenere />
                    <img
                      alt=""
                      src={VigenereImg}
                      className="rounded-lg w-1/3"
                    />
                  </div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/llBtwfc2vhE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </TimelineElement>
          </VerticalTimeline>
        </div>
        <div className="my-20 flex justify-end mx-28">
          <NavLink to="/cripModern" end>
            <div className="w-96 h-20 bg-zinc-700 rounded-lg text-center justify-center items-center flex gap-2 text-white cursor-pointer font-inter font-bold text-2xl hover:bg-zinc-600">
              <ModelICon type="modern" />
              Criptografia Moderna
              <IoIosArrowForward color="white" size={35} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Classic;
