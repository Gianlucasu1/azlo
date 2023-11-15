import styles from "@/css/footer.module.css"
import Link from "next/link"
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




export default function Footer() {
  return (
    <section className="h-32 bg-[#FA3B3B] w-full flex items-center font-bold">

      <div className={styles.footer__grid}>
        <p className="text-white font-semibold text-4xl"><Link className="text-white no-underline" href="#">Azlo</Link></p>
        <p className=""><Link className="text-white font-semibold" href="#">Política de tratamiento de datos - Terminos y condiciones</Link></p>
        <div className="flex gap-2">

          <div className="rounded-full text-white p-2 border border-white">
            <FaFacebookF className="text-white w-[30px] h-[30px]" />
          </div>

          <div className="rounded-full text-white p-2 border border-white">
            <FaInstagram className="text-white w-[30px] h-[30px]" />
          </div>

          <div className="rounded-full text-white p-2 border border-white">
            <FaYoutube className="text-white w-[30px] h-[30px]" />
          </div>

          <div className="rounded-full text-white p-2 border border-white">
            <FaWhatsapp className="text-white w-[30px] h-[30px]" />
          </div>

        </div>
      </div>

    </section>
  )
}
