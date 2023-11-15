import { FaStar } from "react-icons/fa6";

export default function CustomerFeedback({ name, profession, stars, message }: {
  name: string,
  profession: string,
  stars: number,
  message: string
}) {



  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className="w-[120px] h-[120px] bg-slate-400 rounded-full">
      </div>
      <p className="text-black text-3xl font-bold">{name}</p>
      <p className="text-xl">{profession}</p>
      <div className="w-3/12 ml-auto mr-auto grid grid-cols-5">
        <FaStar className="text-red-600" />
        <FaStar className="text-red-600" />
        <FaStar className="text-red-600" />
        <FaStar className="text-red-600" />
        <FaStar className="text-red-600" />
      </div>
      <p className="text-lg leading-tight	 px-4 text-center">
        {message}
      </p>
    </div>
  )
}
