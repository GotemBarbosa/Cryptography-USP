import Header from "../components/Header";
import AES from "../components/cryptoModels/Aes";
import Base64 from "../components/cryptoModels/Base64";
import Binary from "../components/cryptoModels/Binary";
import Caesar from "../components/cryptoModels/Caesar";
import Hexadecimal from "../components/cryptoModels/Hexadecimal";
import Md5 from "../components/cryptoModels/Md5";
import CanvaModel from "../components/cryptoModels/CanvaModel";
import Morse from "../components/cryptoModels/Morse";
import Octal from "../components/cryptoModels/Octal";
import Sha256 from "../components/cryptoModels/Sha256";
import TripleDes from "../components/cryptoModels/TripleDES";
import Vigenere from "../components/cryptoModels/Vigenere";

export default function Models() {
  return (
    <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono bg-slate-900">
      <Header />
      <div className="px-20 pt-5 pb-0">
        <h1 className="text-white text-3xl font-poppins">Modelos:</h1>
      </div>
      <div className="w-full flex flex-wrap px-2 sm:px-10 text-white ">
        <div className="mx-10 mt-10">
          <Caesar isModel />
        </div>
        <div className="mx-10 mt-10">
          <Vigenere isModel />
        </div>
        <div className="mx-10 mt-10">
          <AES isModel />
        </div>
        <div className="mx-10 mt-10">
          <Base64 isModel />
        </div>
        <div className="mx-10 mt-10">
          <TripleDes isModel />
        </div>
        <div className="mx-10 mt-10">
          <Sha256 isModel />
        </div>
        <div className="mx-10 mt-10">
          <Md5 isModel />
        </div>
        <div className="mx-10 mt-10">
          <Binary isModel />
        </div>
        <div className="mx-10 mt-10">
          <Octal isModel />
        </div>
        <div className="mx-10 mt-10">
          <Hexadecimal isModel />
        </div>
        <div className="mx-10 mt-10">
          <Morse isModel />
        </div>
      </div>
      <div className=" mt-20 flex w-full justify-center mb-5 select-none text-emerald-500 text-3xl font-inter">
        Cryptex de Davinci
      </div>
      <div className="w-full h-50 mb-20 flex justify-center items-center border-y-4 rounded-md border-slate-800 ">
        <CanvaModel />
      </div>
    </div>
  );
}
