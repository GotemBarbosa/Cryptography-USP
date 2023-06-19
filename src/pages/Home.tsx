import "react-vertical-timeline-component/style.min.css";

import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import Header from "../components/Header";

import TechBackground from "../assets/TechBg4.jpg";
import ModelICon from "../components/ModelIcon";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-800 ">
      <Header home />

      <div className="relative">
        <div
          className="w-full h-96 z-0 absolute -top-24"
          style={{
            backgroundImage: `url(${TechBackground})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="flex w-full justify-center items-center mt--0 z-10">
          <div
            className="
                    w-10/12 h-40 rounded-lg text-slate-100 font-poppins 
                    flex flex-col px-10 z-10 mt-24 -ml-24
                "
          >
            <h1 className="font-bold text-white text-6xl mb-5">
              História da Criptografia
            </h1>
            <p className="text-xl">
              Um processo histórico de proteção de dados
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col w-full justify-center items-center">
        <h2 className="text-white font-poppins text-3xl font-bold">
          A Criptografia...
        </h2>
        <div className="px-10 flex mt-5 items-center gap-10">
          <p className="text-gray-200 font-inter font-medium w-1/3 bg-gray-900 px-4 py-7 rounded-md">
            A palavra criptografia vem das palavras gregas “kryptos” - ‘oculto,
            secreto, obscuro’, e “graphien” - ‘escrita’.
          </p>
          <BsArrowRightCircle color="white" size={30} />
          <p className="text-gray-200 font-inter font-medium w-1/3 bg-gray-900 px-4 py-2 rounded-md">
            Essa “escrita oculta” vem avançando há milhares de anos. As técnicas
            de criptografia evoluíram de acordo com as necessidades e a
            tecnologia disponível em cada período.
          </p>
          <BsArrowRightCircle color="white" size={30} />
          <p className="text-gray-200 font-inter font-medium w-1/3 bg-gray-900 px-4 py-5 rounded-md">
            Quanto mais as mensagens são decifradas com as técnicas disponíveis,
            mais as criptografias precisam evoluir como resposta.
          </p>
        </div>
      </div>
      <div className="w-full justify-center gap-20 my-24 flex">
        <NavLink to="cripClassic" end>
          <div className="w-96 h-20 bg-zinc-700 rounded-lg text-center justify-center items-center flex gap-2 text-white cursor-pointer font-inter font-bold text-2xl hover:bg-zinc-600">
            <ModelICon type="classic" />
            Criptografia Clássica
            <IoIosArrowForward color="white" size={35} />
          </div>
        </NavLink>
        <NavLink to="cripModern" end>
          <div className="w-96 h-20 bg-zinc-700 rounded-lg text-center justify-center items-center flex gap-2 text-white cursor-pointer font-inter font-bold text-2xl hover:bg-zinc-600">
            <ModelICon type="modern" />
            Criptografia Modérna
            <IoIosArrowForward color="white" size={35} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
