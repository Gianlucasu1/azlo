import { cn } from "@/lib/utils";
import styles from "@/css/custcomments.module.css"
import CustomerFeedback from "../customer-feedback";

export default function CustomerCommentsSection() {
  return (
    <section className="w-full px-8 py-32">
      <div className={cn("", styles.wrapper)}>
        <h2 className="text-black text-5xl font-bold">Quienes confían en nosotros</h2>
        <div className="grid grid-cols-3 py-20">
        <CustomerFeedback name="Fernando Arias" profession="Ingeniero" stars={5} message='"Es una aplicación que me da confianza, sé quien viene a mi casa, cuánto me van a costar los arreglos de mi casa y todo queda registrao"' />
        <CustomerFeedback name="Julian Casas" profession="Técnico eléctrico" stars={5} message="Ahora hago más trabajos que antes, siempre me había preocupado al conocer a un nuevo cliente, ahora voy seguro de lo que tengo que hacer" />
        <CustomerFeedback name="Ciliana Capera" profession="Gerente de limpieza" stars={5} message="Tengo más control de mis trabajadores, cuentas claras para ambos y una herramienta que se adapta a mis servicios" />
        </div>
      </div>
    </section>
  )
}
