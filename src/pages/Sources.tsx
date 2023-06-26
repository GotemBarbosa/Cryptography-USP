import Header from "../components/Header";
import {BsDot} from "react-icons/bs";

const fonts=[
    {link:"", title:"Introdução"},
    {link:"https://www.redhat.com/en/blog/brief-history-cryptography"},
    {link:"https://gitbook.ganeshicmc.com/criptografia/introducao"},
    {link:"https://history-computer.com/the-history-of-cryptography/"},
    {link:"https://www.digicert.com/blog/the-history-of-cryptography"},
    {link:"", title:"V - IV a.C"},
    {link:"https://antigonejournal.com/2021/06/deciphering-spartan-scytale/"},
    {link:"", title:"58 a.C - 51 a.C"},
    {link:"https://pt.khanacademy.org/computing/computer-science/cryptography/crypt/v/caesar-cipher "},
    {link:"https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/ "},
    {link:"https://www.geeksforgeeks.org/vigenere-cipher/?ref=ml_lbp "},
    {link:"", title:"Séc IX"},
    {link:"https://en.wikipedia.org/wiki/One-time_pad"},
    {link:"https://en.wikipedia.org/wiki/Morse_code "},
    {link:"", title:"Séc XX"},
    {link:"https://www.youtube.com/watch?v=S918rR4VdqQ&ab_channel=Simplilearn"},
    {link:"https://www.youtube.com/watch?v=xhiCHnQy8JM&ab_channel=GalenoGarbe"},
    {link:"https://muslimheritage.com/al-kindi-cryptography/"},
    {link:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)"},
    {link:"https://www.thalesgroup.com/en/markets/digital-identity-and-security/magazine/brief-history-encryption"},
    {link:"https://www.encryptionconsulting.com/why-3des-or-triple-des-is-officially-being-retired"},
    {link:"https://www.techtarget.com/searchsecurity/tip/Expert-advice-Encryption-101-Triple-DES-explained"},
    {link:"https://www.youtube.com/watch?v=OKSjPiz-RWM&ab_channel=ComputingwithCherokee"},
    {link:"https://www.youtube.com/watch?v=23JangqRhIc&ab_channel=AhmedIbrahim"},
    {link:"https://developer.mozilla.org/en-US/docs/Glossary/Base64 "},
    {link:"", title:"Séc XXI"},
    {link:"https://i.pinimg.com/550x/79/0d/11/790d11926fbca24571ebf31f32034875.jpg"},
    {link:"https://www.deutsches-spionagemuseum.de/en/sammlung/the-cryptex"},
    {link:"https://brenofreitasmd.medium.com/enigmas-e-desenho-t%C3%A9cnico-9c88e1b8c4c2"},
    {link:"https://www.youtube.com/watch?v=gP4PqVGudtg&ab_channel=AppliedGo"},
    {link:"https://cryptoid.com.br/criptografia/aes-padrao-de-criptografia-avancado-o-que-e-e-como-funciona/"},
    {link:"https://en.wikipedia.org/wiki/Triple_DES "},
    {link:"https://www.movable-type.co.uk/scripts/sha256.html "},
    {link:"https://en.wikipedia.org/wiki/MD5"},
    {link:"https://www.techtarget.com/searchsecurity/definition/elliptical-curve-cryptography"},
    {link:"https://www.youtube.com/watch?v=dCvB-mhkT0w&ab_channel=F5DevCentral"},
    {link:"https://www.youtube.com/watch?v=NF1pwjL9-DE&ab_channel=Computerphile"},
    {link:"", title:"Outros links"},
    {link:"https://static.historiadomundo.com.br/2021/05/bloco-de-argila.jpg"},
    {link:"https://www.gta.ufrj.br/grad/99_2/marcos/image5.jpg "},
    {link:"https://educalingo.com/en/dic-pl/skytale"},
    {link:"https://www.historyofinformation.com/detail.php?entryid=3605"},
    {link:"https://en.wikipedia.org/wiki/One-time_pad"},
    {link:"https://en.wikipedia.org/wiki/Hebern_rotor_machine "},
    {link:"https://pt.wikipedia.org/wiki/Enigma_(m%C3%A1quina)"},
    {link:"https://cyberw1ng.medium.com/triple-des-3des-encryption-features-process-advantages-and-applications-2023-587e5a092789"},
    {link:"https://www.techtarget.com/searchsecurity/definition/elliptical-curve-cryptography"},
]

export default function Sources(){
    return(
        <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900 overflow-x-hidden">
            <Header />
            <div className="px-4 sm:px-12 py-5">
                <h1 className="text-white text-3xl font-poppins">Fontes:</h1>
                <div className="px-10 w-5/6 py-5 mt-5 bg-green-700/20 rounded-md">
                    <p className="text-gray-100 font-inter">
                    💡 Aqui estão as fontes e referências utilizadas no desenvolvimento desse projeto
                    </p>
                </div>

                <div className="text-white">
                    {/* Fontes... */}
                    {fonts.map((font:{link:string, title?:string})=>{
                        if(font.title){
                            return(
                                <h1 className="font-inter font-semibold text-lg my-4 text-emerald-200">
                                    {font.title}:
                                </h1>
                            )
                        }else{
                            return(
                                <div className="flex w-full">
                                    <BsDot className="text-emerald-400 mt-1"/>
                                    <a href={font.link} target="_blank" className="w-5/6  text-xs text-justify">
                                        {font.link}
                                    </a>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}