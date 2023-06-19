import React from "react";
import ModelICon from "./ModelIcon";
interface props {
  title?: string;
  text?: string;
  type?: string;
}
export default function Definitions({ title, text, type = "" }: props) {
  return (
    <div className="flex w-full justify-center items-center mt-20 z-10">
      <div
        className="
                bg-stone-900 w-10/12 py-3 rounded-lg shadow-2xl text-slate-100 font-poppins 
                flex flex-col justify-center items-center text-center px-10 z-10
                "
      >
        <div className="flex gap-2 justify-center">
          <ModelICon type={type} />
          <h1 className="font-semibold mt-2 text-green-600 text-2xl mb-5">
            {title}
          </h1>
        </div>
        <p className="font-poppins">
          {text}
          {/* A criptografia é o estudo dos princípios e métodos de segurança da comunicação a fim de tornar a informação ininteligível para aqueles não autorizados, que se iniciou como estudo sistemático na ciência há aproximadamente 1 século. 
                As raízes da criptografia são encontradas nas antigas civilizações, como a egípcia, hebraica, babilônica, grega e romana. */}
        </p>
      </div>
    </div>
  );
}
