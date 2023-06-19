import { AiOutlineInfoCircle } from "react-icons/ai";
import ModelICon from "../ModelIcon";
import InfoPopover from "../InfoPopover";
import { Popover } from "@mui/material";
import { useState } from "react";

interface model {
  isModel?: boolean;
}

export default function Binary({ isModel }: model) {
  const [codificated, setCodificatedText] = useState("");
  const [decodificated, setDecodificatedText] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encode = () => {
    let code = "";
    for (let i = 0; i < codificated.length; i++) {
      let binary = codificated[i].charCodeAt(0).toString(2);

      // Pad the binary number with leading zeros to ensure 8 bits
      binary = binary.padStart(8, "0");
      code += binary;
    }
    setDecodificatedText(code);
  };

  const decode = () => {
    let textMessage = "";
    const chunkSize = 8;
    let chunks = decodificated.match(new RegExp(`.{1,${chunkSize}}`, "g"));
    if (chunks) {
      for (let i = 0; i < chunks.length; i++) {
        let binary = chunks[i];

        // Pad the binary number with leading zeros to ensure 8 bits
        binary = binary.padStart(8, "0");

        const char = String.fromCharCode(parseInt(binary, 2));
        textMessage += char;
      }
    }
    setCodificatedText(textMessage);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelICon type="codificator" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-xl underline mr-10 h-full  flex items-center justify-center ">
            Codificação binária
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
          Texto para codificar:
        </label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="codificar"
          value={codificated}
          placeholder="valor"
          onChange={(e) => {
            setCodificatedText(e.target.value);
          }}
        />
        <label className="font-medium text-base text-white mt-3">
          Texto para decodificar:
        </label>
        <input
          type="text"
          className="mt-3 outline-none bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
          name="decodificar"
          value={decodificated}
          placeholder="valor"
          onChange={(e) => {
            setDecodificatedText(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Codificar
        </div>
        <div
          onClick={() => {
            decode();
          }}
          className="w-28 rounded-lg h-9 select-none  bg-emerald-500 font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Decodificar
        </div>
      </div>
    </div>
  );
}
