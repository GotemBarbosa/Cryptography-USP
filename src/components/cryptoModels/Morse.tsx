import React, { useState } from "react";
import ModelIcon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";

interface Model {
  isModel?: boolean;
}

const morseCodeMap: { [key: string]: string } = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};

const reverseMorseCodeMap: { [key: string]: string } = Object.entries(
  morseCodeMap
).reduce<{ [key: string]: string }>((obj, [key, value]) => {
  obj[value] = key;
  return obj;
}, {});

export default function MorseCode({ isModel }: Model) {
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encode = () => {
    const encodedValue = text
      .toUpperCase()
      .split("")
      .map((char) => morseCodeMap[char] || char)
      .join(" ");
    setMorseCode(encodedValue);
  };

  const decode = () => {
    const decodedValue = morseCode
      .split(" ")
      .map((code) => reverseMorseCodeMap[code] || code)
      .join("");
    setText(decodedValue);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-54 sm:w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelIcon type="morse" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-lg sm:text-2xl underline mr-10 h-full  flex items-center justify-center ">
            Código Morse
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
                description="É um método usado em telecomunicação para codificar caracteres de texto em sequências padronizadas de 2 diferentes durações de sinais, chamados de pontos e traços. Foi desenvolvido junto com a invenção do telégrafo, pois era preciso encontrar um jeito de se comunicar utilizando apenas pulsos elétricos e os silêncios entre eles.
                "
                date="1844"
                type="Codificação"
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
          placeholder="Digite o texto"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">
          Código Morse:
        </label>
        <input
          type="text"
          className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="morseCode"
          value={morseCode}
          placeholder="Digite o código Morse"
          onChange={(e) => {
            setMorseCode(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 bg-emerald-500 select-none  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Codificar
        </div>
        <div
          onClick={() => {
            decode();
          }}
          className="w-28 mx-[2px] rounded-lg h-9 bg-emerald-500 select-none  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decodificar
        </div>
      </div>
    </div>
  );
}
