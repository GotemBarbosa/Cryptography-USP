import { useState } from "react"

export default function Vigenere(){

    const [encodeText, setEncodeText] = useState("");
    const [decodeText, setDecodeText] = useState("");
    const [key, setKey]= useState("");
    const [errorText, setErrorText] = useState("");

    const randomKey = ()=>{
        let len = Math.floor(Math.random() * 11);
        len = (len < 5) ? 5 : len;
        setKey("");
        for (let i = 0; i < len; i++) {
            let a = Math.floor(Math.random() * 26);
            setKey(key+String.fromCharCode(65 + a));
        }
    }

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
            text += String.fromCharCode(65 + (usedKey[cur++ % usedKey.length] + c) % 26);
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
              97 + (26 + (c - usedKey[cur++ % usedKey.length])) % 26
            );
          }
        }
        setErrorText("");
        setEncodeText(text);
    };

    return(
        <div className="bg-gray-800 p-5 rounded-md">
            <form className="flex flex-col gap-1 mb-5 ">
                <label>Texto para encriptar: </label>
                <input 
                    type="text"
                    name="encriptar"
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-4/5" 
                    value={encodeText} 
                    placeholder="valor"
                    onChange={(e)=>{setEncodeText(e.target.value)}} 
                />

                <label>Texto para decriptar: </label>
                <input 
                    type="text" 
                    name="decriptar"
                    value={decodeText}
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-4/5" 
                    placeholder="valor"
                    onChange={(e)=>{setDecodeText(e.target.value)}}
                />

                <label>Chave: </label>
                <input 
                    type="text" 
                    name="chave"
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-2/5" 
                    value={key}
                    placeholder="0"
                    onChange={(e)=>{setKey(e.target.value)}}
                />
                <p className="text-red-500 font-bold">{errorText}</p>
            </form>
            <div className="flex gap-5">
                
                <button 
                    onClick={()=>{encode()}}
                    className="rounded-md px-5 py-2 bg-teal-600 shadow-md" 
                >
                    Encriptar
                </button>
                <button 
                    onClick={()=>{decode()}}
                    className="rounded-md px-5 py-2 bg-teal-600 shadow-md" 
                >
                    Decriptar
                </button>
                <button 
                    onClick={()=>{randomKey()}}
                    className="rounded-md px-4 py-2 bg-teal-800 shadow-md text-sm" 
                >   
                    Chave aleatória
                </button>
            </div>
        </div>

    )
}