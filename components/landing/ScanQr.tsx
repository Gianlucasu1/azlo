import Image from "next/image";

export default function ScanQr() {
  return (
    <section className="w-full px-28 pt-12 pb-24 box-border">
      <h2 className="pt-8 pb-14 text-black text-5xl font-bold">Visita nuestra App</h2>
      <div className="flex flex-row items-center justify-center gap-16">

        <div className="w-1/2 h-auto flex justify-start items-center shadow-md py-4 px-4 max-w-[550px] rounded-xl gap-8 hover:bg-slate-300">
          <Image src="/images/qr-code.png" width={150} height={150} alt="qrcode" />
          <div className="flex flex-col flex-grow">
            <p className="text-3xl font-bold">Descarga nuestra app Azlo</p>
            <p className="text-md">Escanea para descargar</p>
          </div>
        </div>

        <div className="w-1/2 h-auto flex justify-start items-center shadow-md py-4 px-4 max-w-[550px] rounded-xl gap-8 hover:bg-slate-300">
          <Image src="/images/qr-code.png" width={150} height={150} alt="qrcode" />
          <div className="flex flex-col flex-grow">
            <p className="text-3xl font-bold">Descarga nuestra app Azlo</p>
            <p className="text-md">Escanea para descargar</p>
          </div>
        </div>


      </div>
    </section>
  )
}
