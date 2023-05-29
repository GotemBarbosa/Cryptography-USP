
import ICMCLogo from "../assets/Logo icmc verde fosco 2.png";
import PageButton from "./PageButton";

export default function Header(){
    return(
        <div className="w-full flex items-center justify-between bg-gray-950 h-20 px-5 py-2 text-white font-mono z-10">
            <div className="h-full">
                <img src={ICMCLogo} className="h-full w-auto opacity-80"/>
            </div>
            <div className="flex w-1/3 justify-around">
                <PageButton text="Museu do ICMC" link="https://mc.icmc.usp.br/"/>
                <PageButton text="Sobre nós" link="/sobre-nos"/>
                <PageButton text="Fontes" link="/fontes"/>
            </div>
        </div>
    )
}