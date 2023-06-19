import { useState } from "react";
import ModelIcon from "../ModelIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Popover } from "@mui/material";
import InfoPopover from "../InfoPopover";
import { MD5 } from "crypto-js";

interface Model {
  isModel?: boolean;
}

export default function Md5({ isModel }: Model) {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const encode = () => {
    const hashedValue = MD5(text).toString();
    setHash(hashedValue);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-2 font-inter w-80">
      <div className="flex h-12 w-full justify-between">
        <div className="">
          <ModelIcon type="hash" />
        </div>
        <div className="flex relative">
          <div className="text-white font-semibold text-2xl underline mr-10 pr-16 h-full flex items-center justify-center ">
            MD5
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
          <label className="font-medium text-base text-white">Hash:</label>
          <input
            type="text"
            className="mt-3 outline-none text-sm bg-[#d9d9d9] rounded-lg px-3 w-full h-8 text-black font-medium"
            name="hash"
            value={hash}
            placeholder="valor"
            readOnly
          />
        </div>
      <div className="flex justify-between px-3 mt-4">
        <div
          onClick={() => {
            encode();
          }}
          className="w-28 rounded-lg h-9 bg-emerald-500 select-none  font-bold flex justify-center items-center cursor-pointer outline-offset-1 outline-2 outline-emerald-500 hover:bg-emerald-400"
        >
          Codificar
        </div>
      </div>

    </div>
  );
}
