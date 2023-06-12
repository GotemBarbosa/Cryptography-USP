import Header from "../components/Header";
import ModelCard from "../components/ModelCard";

export default function Models(){
    return(
        <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900">
            <Header />
            <div className="px-20 py-5">
                <h1 className="text-white text-3xl font-poppins">Modelos:</h1>
                <div className="px-10 w-4/5 mt-5 py-5 bg-green-700/20 rounded-md">
                    <p className="text-gray-100">
                    💡 Aqui estão as fontes e referências utilizadas no desenvolvimento desse projeto
                    </p>
                </div>

                    
            </div>
            <div className="w-full flex justify-center items-center">
                <ModelCard/>
            </div>
        </div>
    )
}