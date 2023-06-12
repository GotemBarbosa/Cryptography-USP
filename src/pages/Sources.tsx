import Header from "../components/Header";

export default function Sources(){
    return(
        <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900">
            <Header />
            <div className="px-20 py-5">
                <h1 className="text-white text-3xl font-poppins">Fontes:</h1>
                <div className="px-10 w-4/5 py-5 mt-5 bg-green-700/20 rounded-md">
                    <p className="text-gray-100">
                    💡 Aqui estão as fontes e referências utilizadas no desenvolvimento desse projeto
                    </p>
                </div>

                <div>
                    {/* Fontes... */}
                </div>
            </div>
        </div>
    )
}