import React from 'react'

export default function Definitions(){
    return(
        <div className='flex w-full justify-center items-center mt-20 z-10'>
            <div 
                className='
                    bg-stone-900 w-10/12 h-40 rounded-lg shadow-2xl text-slate-100 font-poppins 
                    flex flex-col justify-center items-center text-center px-10 z-10
                '
            >
                <h1 className='font-semibold text-green-600 text-2xl mb-5'>O que é Criptografia?</h1>
                <p className='font-poppins'>
                A criptografia é o estudo dos princípios e métodos de segurança da comunicação a fim de tornar a informação ininteligível para aqueles não autorizados, que se iniciou como estudo sistemático na ciência há aproximadamente 1 século. 
                As raízes da criptografia são encontradas nas antigas civilizações, como a egípcia, hebraica, babilônica, grega e romana.
                </p>
            </div>
    
        </div>
    )
}