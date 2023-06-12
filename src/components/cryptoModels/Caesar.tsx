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
                strshifted += String.fromCharCode(((upperstr.charCodeAt(i) + (key!==""?parseInt(key):0) - 65) % 26) + 65);
        }
        setDecodeText(strshifted)
    }

    const decode = ()=>{
        let strunshifted = "";
        let upperstr = decodeText.toUpperCase();
        for (let i = 0; i < upperstr.length; i++) {
            if (Number(upperstr.charAt(i)) < 65 || Number(upperstr.charAt(i)) > 90)
                strunshifted += upperstr.charAt(i);
            else
                strunshifted += String.fromCharCode(((upperstr.charCodeAt(i) - (key!==""?parseInt(key):0)  + 65) % 26) + 65);
        }
        setEncodeText(strunshifted);
    }
    
    return(
        <div className="bg-gray-800 px-5 pb-5 pt-1 flex flex-col gap-2 w-full rounded-md">
            <p className='font-bold text-3xl font-mono w-full text-center text-green-300'>
                        Modelo para cifra de Cesar:
            </p>
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
                    type="number" 
                    name="chave"
                    className="rounded-sm outline-none bg-slate-600 px-2 text-gray-200 w-2/5" 
                    value={key}
                    placeholder="0"
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