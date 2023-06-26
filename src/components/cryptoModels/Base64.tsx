import { useState } from "react";
import ModelICon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";

interface Model {
  isModel?: boolean;
}

export default function Base64({ isModel }: Model) {
  const [text, setText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encode = () => {
    const encodedValue = btoa(text);
    setEncodedText(encodedValue);
  };

  const decode = () => {
    try {
      const decodedValue = atob(encodedText);
      setDecodedText(decodedValue);
    } catch (error) {
      console.error("Erro na decodificação:", error);
      setDecodedText("");
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-54 sm:w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelICon type="modern" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-lg sm:text-2xl underline mr-10 h-full  pr-14 flex items-center justify-center ">
            Base64
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
                description="É um grupo de esquemas de codificação binários que representam dados binários no formato ASCII traduzindo-os em uma representação radix-64. É comumente utilizado para encriptar dados binários para armazenamento ou enviar arquivos que funcionam somente com textos ASCII. Isso garante que os dados permaneçam intactos durante o envio."
                date="1987"
                type="Codificação Binária"
              />
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <label className="font-medium text-base text-white">Texto:</label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="texto"
          value={text}
          placeholder="valor"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">
          Texto Codificado:
        </label>
        <input
          type="text"
          className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="encodedText"
          value={encodedText}
          placeholder="valor"
          readOnly
        />
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">
          Texto Decodificado:
        </label>
        <input
          type="text"
          className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="decodedText"
          value={decodedText}
          placeholder="valor"
          readOnly
        />
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Codificar
        </div>
        <div
          onClick={() => {
            decode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decodificar
        </div>
      </div>
    </div>
  );
}
