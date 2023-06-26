import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSpring, animated } from "react-spring";

import Header from "../components/Header";
import TimelineElement from "../components/TimelineElement";
import { IoIosArrowBack } from "react-icons/io";
import Background from "../components/Background";
import Definitions from "../components/Definitions";

import TechBackground from "../assets/Backgroundf.jpg";

import DESImg from "../assets/DES.jpg";
import ElipticaImg from "../assets/eliptica.png";
import EnigmaImg from "../assets/Enigma.jpg";
import HebernImg from "../assets/Hebern.jpg";
import tripleDesImg from "../assets/3des.png";

import CryptexImg from "../assets/cryptexImg.jpg";
import { useEffect, useState } from "react";
import CanvaModel from "../components/cryptoModels/CanvaModel";
import { NavLink } from "react-router-dom";
import ModelICon from "../components/ModelIcon";
import AES from "../components/cryptoModels/Aes";
import TripleDes from "../components/cryptoModels/TripleDES";

function Modern() {
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
            title="Criptografia Moderna"
            text="Forte base matemática, com definições formais de segurança, com algoritmos que já foram extensivamente usados, a Criptografia moderna
          permitiu que os modelos criptografia fossem difundidos para o uso comercial e não apenas para o uso militar, com organizações tentando proteger os seus dados de competidores;
          Alguns dos novos objetivos foram: confidencialidade, integridade, autenticidade e irretratabilidade.
          "
            type="modern"
          />
        </div>
        <div className="my-20 flex mx-28">
          <NavLink to="/cripClassic" end>
          <div className="w-68 md:w-96 px-2 mx-10 md:mx-0 md:px-0 h-20 bg-zinc-700 rounded-lg text-center justify-center items-center flex gap-2 text-white cursor-pointer font-inter font-bold text-sm md:text-2xl hover:bg-zinc-600 -ml-10">
            <ModelICon type="classic" />
              Criptografia Clássica
              <IoIosArrowBack color="white" size={35} />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <VerticalTimeline lineColor="rgb(39 39 42)" layout="1-column-left">
            <animated.div
              className=" w-2 bg-green-800 absolute top-0 bottom-0 translate-x-4 rounded-md"
              style={timelineAnimation}
            />

            <TimelineElement date="1917.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">
                  Máquina de rotor de Hebern{" "}
                </h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    O americano Edward H. Hebern inventou a máquina de
                    criptografia com rotores, que era uma máquina de cifragem
                    eletromecânica construída através da combinação das partes
                    mecânicas de uma máquina de escrever ordinária com as partes
                    elétricas de uma máquina de escrever elétrica, ligando as
                    duas através de um codificador. Tal máquina marcou a
                    primeira vez que um circuito elétrico foi utilizado em um
                    dispositivo de cifra.
                  </p>
                  <img
                    alt=""
                    src={HebernImg}
                    className="rounded-lg w-full sm:w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="1918.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Enigma</h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    O engenheiro alemão Arthur Scherbius desenvolveu a icônica
                    máquina de criptografia “Enigma”, que utilizava 3 ou mais
                    rotores para misturar o alfabeto de 26 letras, resultando no
                    texto encriptado. Nos anos seguintes, ganhou versões
                    aprimoradas, as quais foram adquiridas pela marinha alemã em
                    1926. Durante a Segunda Guerra Mundial, tal máquina foi
                    expandida e utilizada por todas as comunicações de rádio
                    alemãs e t ambém as de outras potências do Eixo. A máquina
                    foi decifrada somente em 1941, com Alan Turing, pai da
                    ciência computacional e da inteligência artificial.
                  </p>
                  <img
                    alt=""
                    src={EnigmaImg}
                    className="rounded-lg w-full sm:w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="1971.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Lucifer</h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    IBM criou uma cifra chamada Lucifer, um tipo de cifra de
                    blocos que usa um algoritmo operando em uma quantidade fixa
                    de bits, chamada de blocos. As cifras de blocos utilizam
                    algoritmos de chaves simétricas que usam as mesmas chaves
                    tanto para codificar quanto para decodificar. Esse foi um
                    tipo de criptografia que combinou transposição e
                    substituição, e contribuiu para a criação do DES (Data
                    Encryption Standard).
                  </p>
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="1976.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">DES</h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    Após o protótipo Lucifer, a IBM melhorou o sistema de
                    encriptação até a criação do DES (Data Encryption Standard).
                    Baseando-se no algoritmo de Feistel, o DES trabalha com 64
                    bits por vez, apresentando o lado direito com 32 bits e um
                    lado esquerdo de 32, a encriptação funciona de forma todo
                    round, os 32 bits são expandidos para 48 bits em ordem de
                    poderem ser comparados com a chave de 48 bits de cada round,
                    depois os dois são reduzidos novamente para 32 bits, assim,
                    o lado direito é passado para o lado esquerdo1 sem
                    alteração, e o lado esquerdo é passado para o lado direito1
                    passando por uma operação xor com o lado direito, sendo esse
                    processo o round 1 de um total de 16 rounds. No final dos 16
                    ronds é obtida a mensagem criptografada.
                  </p>
                  <img
                    alt=""
                    src={DESImg}
                    className="rounded-lg w-full sm:w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="1977.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">RSA</h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    Foi proposto um algoritmo de criptografia assimétrica
                    baseado em chaves pública-privada por Ron Rivest, Adi Shamir
                    e Leonard Adleman, conhecido como RSA. Tal criptografia
                    utiliza de um chave de encriptação, que é pública, e
                    portanto pode ser divulgada sem eventuais problemas, e uma
                    chave de decriptação, a qual deve ser mantida secreta
                    (privada). Embora a ideia desta criptografia já fosse
                    discutida anteriormente, foi somente em Abril de 1977 que os
                    três propuseram um método que tornasse viável esse sistema.
                    Para isso, aproveitaram-se da dificuldade de fatorar o
                    produto de dois números primos grandes, da ordem de
                    10^(100).
                  </p>
                </div>
              </div>
            </TimelineElement>
            <TimelineElement date="1998.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Triple DES</h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    Com o avanço da tecnologia, e por consequência dos métodos
                    de decifração de códigos, o DES, com sua pequena chave de 56
                    bits, se provou facilmente quebrável por força bruta,
                    levando a criação do Triples Data Encryption Algorithm
                    (TDEA). O novo método de criptografia consiste em encriptar
                    uma mensagem com o uso do DES, gerando a chave 1 de 56 bits,
                    descriptografar a mensagem com uma chave 2, e encripta-la
                    novamente com uma chave 3, sendo que a união dessas 3 chaves
                    forma uma única chave de 168 bits, provando se muito mais
                    segura que o DES padrão.
                  </p>
                </div>
                <div className="flex w-full gap-5">
                  <div className="bg-slate-800 rounded-lg">
                    <TripleDes />
                  </div>
                  <img
                    alt=""
                    src={tripleDesImg}
                    className="rounded-lg w-full sm:w-[700px]"
                  />
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="2002.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">AES</h1>
                <div className="flex flex-col gap-5 px-5">
                  <p className="text-justify">
                    O AES (Advanced Encryption Standard) surgiu após DES,
                    substituindo-o, sendo adotado até mesmo pela agência de
                    segurança nacional dos E.U.A, uma vez que apresenta uma
                    segurança muito superior. O AES é uma variante do família
                    Rijndael, sendo este grupo de criptografias que faz
                    homenagem aos criptografia belgas Joan Daemen e Vincent
                    Rijmen, e no momento de sua criação, este estilo de
                    criptografia era o mais seguro existente, apresentando
                    chaves que podiam chegar até 256, muito superior aos 56 do
                    DES. A criptografia AES consiste em um processo repetitivo
                    de transformar a mensagem original em uma matriz, substituir
                    os termos com o uso de uma tabela específica gerada a partir
                    da chave, embaralhar os termos da matriz, multiplica-los por
                    outra matriz e somá-la a uma matriz chave específica de cada
                    round. Esse processo é repetido várias vezes, dependendo do
                    tamanho da mensagem, chegando a um máximo de 14 vezes.
                  </p>
                  <div className="w-full flex justify-center">
                    <AES />
                  </div>
                </div>
              </div>
            </TimelineElement>

            <TimelineElement date="2003 ">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">Criptex</h1>

                <p>
                  A criptex, ganhou sua fama graças ao filme Código da Vinci,
                  baseado no livro de mesmo nome, o autor Dan Brown afirma que a
                  Criptex não existiu de fato, mas que existiram desenhos feitos
                  por Leonardo da Vinci que seriam o projeto da Criptex, ela
                  apenas não foi construída. O projeto consistia em uma espécie
                  de cilindro com 5 anéis que poderiam ser rotacionados, sendo
                  que esses anéis possuem letras de forma que ao serem
                  rotacionados eles formam uma palavra, um código que permitiria
                  a abertura da Criptex.
                </p>
                <img alt="" src="" className="rounded-lg" />
                <div className="flex w-full gap-5 flex-col sm:flex-row">
                  <div className="bg-slate-800 rounded-lg w-full sm:w-3/4">
                    <CanvaModel />
                  </div>
                  <img
                    alt=""
                    src={CryptexImg}
                    className="rounded-lg w-full sm:w-[400px]"
                  />
                </div>
              </div>
            </TimelineElement>
            <TimelineElement date="2005.">
              <div className="flex font-poppins justify-center items-center flex-col gap-5">
                <h1 className="text-3xl text-emerald-600">
                  Criptografia de curva elíptica
                </h1>
                <div className="flex gap-5 px-5 flex-col sm:flex-row">
                  <p className="text-justify">
                    A Criptografia de Curva Elíptica (mais conhecida pela sigla
                    em inglês ECC) foi proposta por Neal Koblitz e Victor Miller
                    em 1985, porém só passou a ser implementada em 2005, se
                    provando muito mais segura que métodos anteriores. Para
                    colocar em perspectiva, para obter a segurança se uma chave
                    de 256 bits em ECC, era necessária uma chave de 3072 bits em
                    RSA. A criptografia em ECC consiste no uso de uma curva
                    elíptica simétrica ao eixo X, onde se é marcado um ponto
                    inicial , A, e um segundo ponto ,B, que formarão uma reta.
                    Essa reta irá colidir com outro ponto da elipse formando o
                    ponto C, que será refletido para o outro lado do eixo X,
                    formando o ponto D, sendo assim, será traçada uma reta do
                    ponto A ao ponto D, o ponto de encontro desta reta com a
                    elipse formará o ponto E. Esse processo é repetido n vezes,
                    sendo esse n a chave para decodificar o código.
                  </p>
                  <img
                    alt=""
                    src={ElipticaImg}
                    className="rounded-lg w-full sm:w-1/3 h-auto mt-5"
                  />
                </div>
              </div>
            </TimelineElement>
          </VerticalTimeline>
        </div>

        <div className="my-10 mx-10 text-white bg-slate-800 z-30 px-5 py-10 rounded-md">
          <h1 className="font-poppins text-2xl text-zinc-300 font-semibold ">
            Cenário recente da Criptografia:
          </h1>
          <p className="ml-10 pl-5 border-l-4 font-inter">
            Num cenário de alta globalização e com a vinda da internet, onde a
            troca de informação nunca foi tão alta, a necessidade de segurança
            nessa transação de dados também está em seu auge. Essa segurança é
            feita através da criptografia, dessa forma dados pessoais como senha
            de email, conta bancária, redes sociais são protegidas de fontes
            externas. Empresas, que possuem um banco de dados gigantesco,
            armazenam esses dados na nuvem, e uma grande parte desses dados não
            pode ser vazada,uma vez que podem beneficiar empresas concorrentes e
            causar prejuízo. Esses dados são protegidos com criptografia de alto
            nível.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modern;
