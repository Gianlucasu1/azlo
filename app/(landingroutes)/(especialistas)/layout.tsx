"use client"

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function EspecialistasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-slate-500 grid grid-cols-10 relative">

      <div className="col-span-8 pt-8 pl-8 flex flex-col h-full justify-between">
        <Link href="/" className="no-underline bg-whit rounded-lg py-2 px-3 w-[250px] text-black font-thin bg-white">
          Volver a la página inicial
        </Link>

        <div className='w-2/3 pb-20 pl-20'>
          {children}
        </div>


      </div>

      <div className="col-span-2 bg-white">        
      </div>

      <div style={{ right: "5%", boxShadow: "4px 8px 8px rgba(0, 0, 0, 0.1), 8px 8px 16px rgba(0, 0, 0, 0.3)" }} className="w-1/4 absolute top-1/2 bg-white -translate-y-1/2 h-4/5 flex flex-col items-center justify-around pt-20 box-border gap-4 rounded-md">

        <div>
          <Image src="/images/azlo-img2.png" width={270} height={70} alt="Azlo logo" className='' />
          <p className="text-black">Delivery de especialista a tu hogar</p>
        </div>

        <div className='flex flex-col gap-2'>

          <button className='flex items-center justify-center gap-2 border-gray-300 border py-2 px-3 rounded-3xl' style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.3)" }} type='submit' onClick={() => { console.log("hello") }}><FcGoogle className="w-7 h-7" />
            Ingresa con google
          </button>

          <button className=' bg-[#3A5692] flex items-center justify-center gap-2 py-2 px-3 rounded-3xl text-white' style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.3)" }} type='submit' onClick={() => { console.log("hello") }}><FaFacebookSquare className="text-white w-7 h-7" />
            Ingresa con Facebook
          </button>

        </div>

        <div className='flex flex-col items-center text-sm'>
          <p className='mb-0'>¿No tienes una cuenta?</p>
          <p><Link className='text-[#FA3B3B]' href="/sign-in">Registrate acá</Link> de manera sencilla</p>
        </div>

        
        <p className='w-4/5 text-xs text-center'>Este sitio está protegido por reCaptcha, <Link href="#" className='text-black'>Política de privacidad y términos del servicio</Link></p>

        <p className='text-center text-xs text-slate-300'>Derechos reservados 2023</p>

      </div>


    </div>
  )
}
