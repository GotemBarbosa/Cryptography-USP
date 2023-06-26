import { NavLink } from "react-router-dom";

interface PageButtonProps{
    text: string;
    link: string;
}

export default function PageButton(props:PageButtonProps){
    return(
        <NavLink to={props.link}target={props.text === 'Museu do ICMC'?"_blank":undefined}>
            <div className="p-2 font-inter hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-emerald-600/50 rounded-md hover:bg-emerald-900/50 text-emerald-100 text-xs font-semibold sm:text-lg">
                {props.text}
            </div>
        </NavLink>
    )
}