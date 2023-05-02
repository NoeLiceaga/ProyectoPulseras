"use client"
import Image from 'next/image'
import IconoConTexto from '@/components/IconoConTexto'
import { Modelo } from '@/components/Modelo'
import { usePulseras } from '@/context/PulserasContext'
export default function Home() {

  const {pulseras} = usePulseras()
  console.log(pulseras)
  return (
     <div className='flexflex-wrap w-[100%]'>
      <IconoConTexto />
      <div className='flex justify-center align-middle mt-10 font-bold text-md border-b-4 bg-[#cfb7f1] border-[#bb9bf0] p-5 text-white md:text-4xl md:mt-40'>
        <h1>CONOCE LOS MODELOS DISPONIBLES</h1>
      </div>
      <div className='flex flex-wrap w-[100%]'>
        {
          pulseras.map((pulsera)=>(
            <Modelo pulsera={pulsera} key={pulsera.id}/>
          ))
        }
      </div>
     </div> 
  )
}
