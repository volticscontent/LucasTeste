import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Divider from '../components/Divider';
import { HeartPulse, ShieldCheck, Bike, Truck, Users, Star, Lock, Rocket, Wrench, Globe } from 'lucide-react';

// Cards de planos (usando imagens reais disponíveis)
const planos = [
  {
    title: 'Plano Essencial',
    desc: 'Acesso à comunidade, descontos exclusivos e conteúdo premium.',
    image: '/img/team/67361169.jpg',
    icon: <HeartPulse className="text-accent w-8 h-8 mb-2" aria-label="Essencial" />,
  },
  {
    title: 'Plano Performance',
    desc: 'Consultoria, eventos exclusivos e benefícios em produtos.',
    image: '/img/team/67361170.jpg',
    icon: <Rocket className="text-accent w-8 h-8 mb-2" aria-label="Performance" />,
  },
  {
    title: 'Plano Pro',
    desc: 'Mentoria, acesso antecipado a lançamentos e suporte VIP.',
    image: '/img/team/67384541.jpg',
    icon: <Star className="text-accent w-8 h-8 mb-2" aria-label="Pro" />,
  },
];

// Cards de serviços/hub
const servicos = [
  {
    icon: <Wrench className="w-10 h-10 text-primary mb-2" aria-label="Oficina" />, title: 'Oficina Parceira', desc: 'Manutenção e revisão com especialistas.'
  },
  {
    icon: <Globe className="w-10 h-10 text-primary mb-2" aria-label="Eventos" />, title: 'Eventos & Rides', desc: 'Pedais, workshops e experiências.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-2" aria-label="Seguro" />, title: 'Seguro Bike', desc: 'Proteção e tranquilidade para você pedalar.'
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Power House Brasil | Saúde e Performance no Ciclismo"
        description="A loja e comunidade para ciclistas urbanos. Produtos exclusivos, blog, dicas e muito mais."
      />
      {/* Hero modernizado */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/static/hero.jpg"
          alt="Ciclista pedalando com saúde e performance"
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true" />
        <div className="relative z-20 w-full max-w-3xl mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-accent drop-shadow-lg mb-4">Saúde e Performance no Ciclismo</h1>
          <p className="text-xl text-foreground mb-8 max-w-2xl">Viva o melhor do ciclismo urbano e esportivo com produtos, conteúdo e uma comunidade apaixonada por bike.</p>
          <Link href="/shop">
            <ButtonPrimary className="text-lg px-8 py-4">Ver Produtos</ButtonPrimary>
          </Link>
        </div>
      </section>

      <Divider />

      {/* Planos */}
      <Container>
        <SectionTitle className="text-center">Planos Power House</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planos.map((plano) => (
            <div key={plano.title} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image src={plano.image} alt={plano.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-2 left-2">{plano.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-primary text-center">{plano.title}</h3>
              <p className="text-foreground/80 text-center mb-4">{plano.desc}</p>
              <ButtonPrimary className="w-full mt-auto">Saiba mais</ButtonPrimary>
            </div>
          ))}
        </div>
      </Container>

      <Divider />

      {/* Power Hub / Serviços */}
      <section className="bg-background py-16">
        <Container>
          <SectionTitle className="text-center">Power Hub & Serviços</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {servicos.map((serv) => (
              <div key={serv.title} className="flex flex-col items-center bg-white rounded-xl shadow-card p-8 text-center transition-all hover:shadow-xl hover:scale-105 duration-300 ease-in-out cursor-pointer">
                {serv.icon}
                <h4 className="font-semibold mb-1 text-primary">{serv.title}</h4>
                <p className="text-foreground/80 text-sm">{serv.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <ButtonPrimary className="px-8 py-3">Conheça o Hub</ButtonPrimary>
            </Link>
          </div>
        </Container>
      </section>

      <Divider />

      {/* CTAs Secundárias */}
      <Container>
        <div className="py-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/shop" className="w-full sm:w-auto">
            <ButtonPrimary className="w-full sm:w-auto">Ver Produtos</ButtonPrimary>
          </Link>
          <Link href="/blog" className="w-full sm:w-auto">
            <ButtonPrimary className="w-full sm:w-auto bg-accent text-primary hover:bg-accent-dark">Ver Notícias</ButtonPrimary>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;
