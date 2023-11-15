import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar'
import CustomerCommentsSection from '@/components/landing/CustomerCommentsSection';
import Hero from '@/components/landing/Hero'
import { HeroInfo } from '@/components/landing/HeroInfo'
import ScanQr from '@/components/landing/ScanQr';

const list = ["Limpieza", "Cerrajería", "Gasfitería"];


export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <NavBar />      
      <Hero />      
      <HeroInfo urlLink='/necesitas-un-especialista' list={list} title='¿No sabes quién te puede ayudar a reparar tu casa?' content='Encuentra en Azlo la ayuda que tanto necesitas de una forma rápida y segura, mira nuestros servicios y solicita tu primer especialista.' buttonTitle='Solicita un especialista' imgOrder='left' />        
      <HeroInfo urlLink='/eres-especialista' title='Trabaja con Alzo y encuentra más clientes en tu zona' content='Gana dinero de forma segura, gestiona tus ganancias y prepárate para tener una agenda ocupada.' buttonTitle='Únete a nosotros' linkTitle='¿Ya tienes cuenta? Inicia sesión' imgOrder='right' />        
      <HeroInfo urlLink='/eres-especialista' title='El aliado ideal que puede llevar a tu empresa a otro nivel' content='Te ofrecemos una herramienta poderosa con la cual puedes gestionar los servicios de tu equipo de trabajo y comunicarte con tus clientes de una manera eficiente.' buttonTitle='Únete a nosotros' linkTitle='Consulta nuestras soluciones' imgOrder='left' />        
      <CustomerCommentsSection />
      <ScanQr />
      <Footer />
    </main>
  )
}
