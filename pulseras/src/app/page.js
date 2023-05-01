import Image from 'next/image'
import IconoConTexto from '@/components/IconoConTexto'
export default function Home() {
  return (
     <div className='flexflex-wrap w-[100%]'>
      <IconoConTexto />
      <div className='flex justify-center align-middle mt-10 font-bold text-md border-b-4 bg-[#cfb7f1] border-[#bb9bf0] p-5 text-white md:text-4xl md:mt-40'>
        <h1>CONOCE LOS MODELOS DISPONIBLES</h1>
      </div>
     </div> 
  )
}
