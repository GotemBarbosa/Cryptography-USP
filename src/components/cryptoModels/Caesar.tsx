import { useState } from "react"

export default function Caesar(){
    const [encodeText, setEncodeText] = useState("")
    const [decodeText, setDecodeText] = useState("")
    const [key, setKey] = useState("");

    const encode = ()=>{
        let strshifted = "";
        let upperstr = encodeText.toUpperCase();
        for (let i = 0; i < upperstr.length; i++) {
            if (Number(upperstr.charAt(i)) < 65 || Number(upperstr.charAt(i)) > 90)
                strshifted += upperstr.charAt(i);
            else
                strshifted += String.fromCharCode(((upperstr.charCodeAt(i) + parseInt(key) - 65) % 26) + 65);
        }
        setDecodeText(strshifted)
    }

    const decode = ()=>{

    }
    
    return(
        <div className="bg-gray-800 p-5 rounded-md">
            <form className="flex flex-col gap-1 mb-5 ">
                <label>Texto para encriptar: </label>
                <input 
                    type="text"
                    name="encriptar"
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-4/5" 
                    value={encodeText} 
                    onChange={(e)=>{setEncodeText(e.target.value)}} 
                />
                <label>Texto para decriptar: </label>
                <input 
                    type="text" 
                    name="decriptar"
                    value={decodeText}
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-4/5" 
                    onChange={(e)=>{setDecodeText(e.target.value)}}
                />
                
                <label>Chave: </label>

                <input 
                    type="number" 
                    name="chave"
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-2/5" 
                    value={key}
                    onChange={(e)=>{setKey(e.target.value)}}
                />
            </form>
            <div className="flex gap-5 w-full justify-center">
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
            </div>

        </div>
    )
}