interface PageButtonProps{
    text: string;
    link: string;
}

export default function PageButton(props:PageButtonProps){
    return(
        /*Trocar pela page */
        <a href={props.link} target={props.text == 'Museu do ICMC'?"_blank":undefined}>
            <div className="p-2 font-poppins border-2 border-emerald-700 bg-emerald- rounded-md hover:bg-emerald-900/50 text-emerald-100">
                {props.text}
            </div>
        </a>
    )
}