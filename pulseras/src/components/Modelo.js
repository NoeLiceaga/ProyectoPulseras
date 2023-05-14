import React from 'react'
import Image from 'next/image'
import ColorPaletteMenu from './ColorPaletteMenu'
import AccesoriosLista from './AccesoriosLista'
export const Modelo = ({pulsera, idA,idC}) =>{
  return (
    <div className='w-[100%] flex flex-wrap justify-center align-middle border-4 m-12 rounded-md shadow-lg shadow-[#cfb7f1] border-[#cfb7f1] 
    md:w-1/4 md:m-6'>
        <div className='w-[100%] justify-center align-middle flex m-5'>
            <Image src={pulsera.foto} className='w-3/5' alt='imagen'/>
        </div>
        <div className='w-[100%] text-center text-2xl font-bold mx-6'>
            <h1>{pulsera.nombre}</h1>
        </div>
        <div className='w-[100%] text-center font-thin mx-6'> 
            <p>{pulsera.descripcion}</p>
        </div>
        <div className='w-[100%]'>
            <ColorPaletteMenu identificador={pulsera.idColor}/>
        </div>
        <div className='w-[100%]'>
            <AccesoriosLista identificador={pulsera.idAccesorio} />
        </div>
        <div className='w-[100%] flex justify-center align-middle text-white my-5 '>
            <button className='bg-pink-700 rounded-md px-6 py-3  animate-pulse'>
                QUIERO UNO
            </button>
        </div>
    </div>
  )
}
