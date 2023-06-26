import { useState } from "react";
import React from "react";
import ModelICon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";

interface model {
  isModel?: boolean;
}

export default function Caesar({ isModel }: model) {
  const [encodeText, setEncodeText] = useState("");
  const [decodeText, setDecodeText] = useState("");
  const [key, setKey] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encode = () => {
    let strshifted = "";
    let upperstr = encodeText.toUpperCase();
    for (let i = 0; i < upperstr.length; i++) {
      if (Number(upperstr.charAt(i)) < 65 || Number(upperstr.charAt(i)) > 90)
        strshifted += upperstr.charAt(i);
      else
        strshifted += String.fromCharCode(
          ((upperstr.charCodeAt(i) + (key !== "" ? parseInt(key) : 0) - 65) %
            26) +
            65
        );
    }
    setDecodeText(strshifted);
  };

  const decode = () => {
    let strunshifted = "";
    let upperstr = decodeText.toUpperCase();
    for (let i = 0; i < upperstr.length; i++) {
      if (Number(upperstr.charAt(i)) < 65 || Number(upperstr.charAt(i)) > 90)
        strunshifted += upperstr.charAt(i);
      else
        strunshifted += String.fromCharCode(
          ((upperstr.charCodeAt(i) - (key !== "" ? parseInt(key) : 0) + 65) %
            26) +
            65
        );
    }
    setEncodeText(strunshifted);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-54 sm:w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelICon type="classic" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-lg sm:text-2xl underline mr-10 h-full  flex items-center justify-center ">
            Cifra de Cesar
          </div>
          <div className="relative">
            {isModel ? (
              <button
                aria-describedby="popover"
                onClick={(e) => {
                  handleIconClick(e);
                }}
              >
                <AiOutlineInfoCircle
                  color="#e2e8f0"
                  className="absolute top-0 right-2 cursor-pointer"
                  size={23}
                />
              </button>
            ) : null}
            <Popover
              id="popover"
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleCloseIcon}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <InfoPopover
                description="É uma técnica de encriptação simples usada por Júlio César para mandar mensagens secretas para aliados. Consistia em deslocar as letras do texto em um certo número de posições “k”, chamado de chave."
                date="100 a.C."
                type="Substituição monoalfabética"
              />
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <label className="font-medium text-base text-white">
          Texto para encriptar:
        </label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="encriptar"
          value={encodeText}
          placeholder="valor"
          onChange={(e) => {
            setEncodeText(e.target.value);
          }}
        />
        <label className="font-medium text-base text-white mt-3">
          Texto para decriptar:
        </label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="decriptar"
          value={decodeText}
          placeholder="valor"
          onChange={(e) => {
            setDecodeText(e.target.value);
          }}
        />
        <label className="font-medium text-base text-white mt-3">Chave:</label>
        <input
          type="number"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="chave"
          value={key}
          placeholder="0"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Encriptar
        </div>
        <div
          onClick={() => {
            decode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decriptar
        </div>
      </div>
    </div>
  );
}
