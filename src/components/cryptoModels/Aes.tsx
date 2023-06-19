import { useState } from "react";
import ModelIcon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";
import CryptoJS from "crypto-js";

interface Model {
  isModel?: boolean;
}

export default function AES({ isModel }: Model) {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encrypt = () => {
    try {
      const encryptedValue = CryptoJS.AES.encrypt(text, key).toString();
      setResultText(encryptedValue);
    } catch (error) {
      console.log("Erro ao encriptar");
    }
  };

  const decrypt = () => {
    try {
      const decryptedValue = CryptoJS.AES.decrypt(resultText, key).toString(
        CryptoJS.enc.Utf8
      );
      setResultText(decryptedValue);
    } catch (error) {
      console.log("Erro ao decriptar");
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelIcon type="modern" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-2xl underline mr-10 h-full  pr-16 flex items-center justify-center ">
            AES
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
                description="É um algoritmo de criptografia simétrica amplamente adotado. Ele é usado para criptografar e descriptografar dados usando a mesma chave. O AES é considerado seguro e é usado em várias aplicações, como proteção de dados em redes, criptografia de arquivos e comunicação segura."
                date="20/04/2022"
                type="Criptografia simétrica"
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
          name="text"
          value={text}
          placeholder="valor"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">Chave:</label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="key"
          value={key}
          placeholder="valor"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">Resultado:</label>
        <input
          type="text"
          className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="resultText"
          value={resultText}
          placeholder="valor"
          readOnly
        />
      </div>

      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encrypt();
          }}
          className="w-28 rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Encriptar
        </div>
        <div
          onClick={() => {
            decrypt();
          }}
          className="w-28 select-none rounded-lg h-9 bg-emerald-500  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decriptar
        </div>
      </div>
    </div>
  );
}
