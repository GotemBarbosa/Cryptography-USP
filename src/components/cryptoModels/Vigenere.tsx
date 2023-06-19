import { useState } from "react";
import InfoPopover from "../InfoPopover";
import { Popover } from "@mui/material";
import ModelICon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface model {
  isModel?: boolean;
}

export default function Vigenere({ isModel }: model) {
  const [encodeText, setEncodeText] = useState("");
  const [decodeText, setDecodeText] = useState("");
  const [key, setKey] = useState("");
  const [errorText, setErrorText] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  function getKeys(): number[] {
    let m: number[] = [];
    let trimmedKey = key.trim();
    if (trimmedKey === "") {
      setErrorText("Chave Inválida");
      return m;
    }
    let uppercaseKey = trimmedKey.toUpperCase();
    for (let i = 0; i < uppercaseKey.length; i++) {
      let charCode = uppercaseKey.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        m[i] = charCode - 65;
      }
    }
    return m;
  }

  const encode = () => {
    let usedKey = getKeys();
    if (!usedKey.length) {
      return;
    }
    let encode = " " + encodeText.toUpperCase();
    encode = encode.trim();

    if (encode === "") {
      setErrorText("Escreva algum texto para encriptar...");
      return;
    }

    let text = "";
    let cur = 0;

    for (let i = 0; i < encode.length; i++) {
      let c = encode.charCodeAt(i);
      if (c < 65 || c > 90) {
        text += encode.charAt(i);
      } else {
        c = c - 65;
        text += String.fromCharCode(
          65 + ((usedKey[cur++ % usedKey.length] + c) % 26)
        );
      }
    }

    text = text.toLowerCase();
    setErrorText("");
    setDecodeText(text);
  };

  const decode = () => {
    let usedKey = getKeys();
    if (!usedKey.length) {
      return;
    }
    let decode = decodeText.toLowerCase();

    if (decode === "") {
      setErrorText("Escreva algum texto para decriptar...");
      return;
    }

    let text = "";
    let cur = 0;

    for (let i = 0; i < decode.length; i++) {
      let c = decode.charCodeAt(i);
      if (c < 97 || c > 122) {
        text += decode.charAt(i);
      } else {
        c = c - 97;
        text += String.fromCharCode(
          97 + ((26 + (c - usedKey[cur++ % usedKey.length])) % 26)
        );
      }
    }
    setErrorText("");
    setEncodeText(text);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelICon type="classic" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-2xl underline mr-10 h-full  flex items-center justify-center ">
            Cifra de Vigenere
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
                description="oie"
                date="20/04/2022"
                type="Criptografia classica"
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
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="chave"
          value={key}
          placeholder="valor"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        <p className="text-red-500 font-bold">{errorText}</p>
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 select-none rounded-lg h-9 bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Encriptar
        </div>
        <div
          onClick={() => {
            decode();
          }}
          className="w-28 select-none rounded-lg h-9 bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decriptar
        </div>
      </div>
    </div>
  );
}
