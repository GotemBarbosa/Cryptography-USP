import { useState } from "react";
import ModelICon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";
import { TripleDES, mode, pad, enc } from "crypto-js";

interface Model {
  isModel?: boolean;
}

export default function TripleDes({ isModel }: Model) {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encryptTripleDES = () => {
    const encrypted = TripleDES.encrypt(text, key, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    }).toString();
    setCiphertext(encrypted);
  };

  const decryptTripleDES = () => {
    const decrypted = TripleDES.decrypt(ciphertext, key, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    }).toString(enc.Utf8);
    setCiphertext(decrypted);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-54 sm:w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelICon type="modern" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-lg sm:text-2xl sm:text-2xl underline mr-10 h-full pr-10 flex items-center justify-center ">
            Triple DES
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
                description="É uma cifra de chaves simétricas, que aplica o algoritmo da DES 3 vezes para cada bloco. Foi uma tentativa de proteger os dados de ataques cada vez mais robustos na cifra original da DES, utilizando um método simples para aumentar o tamanho da chave. Atualmente, foi substituída pelo AES."
                date="1978"
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
          name="texto"
          value={text}
          placeholder="valor"
          onChange={(e) => {
            setText(e.target.value);
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
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium text-base text-white">Resultado:</label>
        <input
          type="text"
          className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="ciphertext"
          value={ciphertext}
          placeholder="valor"
          readOnly
        />
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={encryptTripleDES}
          className="w-28 mx-[2px] rounded-lg h-9 bg-emerald-500 select-none  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Encriptar
        </div>
        <div
          onClick={decryptTripleDES}
          className="w-28 mx-[2px] rounded-lg h-9 bg-emerald-500 select-none  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decriptar
        </div>
      </div>
    </div>
  );
}
