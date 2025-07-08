import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';
import { HeartPulse, ShieldCheck, Bike, Truck, Users, Star, Lock } from 'lucide-react';

const valores = [
  {
    icon: <HeartPulse className="text-accent w-10 h-10 mb-2" aria-label="Saúde" />, // Saúde
    title: 'Saúde',
    desc: 'Promovemos qualidade de vida e bem-estar através do ciclismo.'
  },
  {
    icon: <Star className="text-accent w-10 h-10 mb-2" aria-label="Qualidade" />, // Qualidade
    title: 'Qualidade',
    desc: 'Produtos selecionados e testados por especialistas.'
  },
  {
    icon: <Bike className="text-accent w-10 h-10 mb-2" aria-label="Desempenho" />, // Desempenho
    title: 'Desempenho',
    desc: 'Tecnologia e inovação para ciclistas urbanos e esportivos.'
  },
];

const beneficios = [
  {
    icon: <Truck className="text-primary w-8 h-8 mb-2" aria-label="Entrega rápida" />,
    title: 'Entrega Rápida',
    desc: 'Receba seus produtos em todo o Brasil com agilidade.'
  },
  {
    icon: <Users className="text-primary w-8 h-8 mb-2" aria-label="Atendimento humano" />,
    title: 'Atendimento Humano',
    desc: 'Equipe apaixonada por ciclismo pronta para ajudar.'
  },
  {
    icon: <ShieldCheck className="text-primary w-8 h-8 mb-2" aria-label="Especialistas" />,
    title: 'Especialistas',
    desc: 'Conte com quem entende de bike e performance.'
  },
  {
    icon: <Lock className="text-primary w-8 h-8 mb-2" aria-label="Compra segura" />,
    title: 'Compra Segura',
    desc: 'Ambiente protegido e pagamentos confiáveis.'
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Power House Brasil | Saúde e Performance no Ciclismo"
        description="A loja e comunidade para ciclistas urbanos. Produtos exclusivos, blog, dicas e muito mais."
      />
      {/* Hero / Banner Principal */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-background overflow-hidden">
        <Image
          src="/img/static/hero.jpg"
          alt="Ciclista pedalando com saúde e performance"
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20 flex flex-col items-center text-center bg-black/40 rounded-xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 transition-all duration-300">
            Saúde e Performance no Ciclismo
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-2xl transition-all duration-300">
            Viva o melhor do ciclismo urbano e esportivo com produtos, conteúdo e uma comunidade apaixonada por bike.
          </p>
          <ButtonPrimary className="w-full sm:w-auto text-lg px-8 py-4">
            Ver Produtos
          </ButtonPrimary>
        </div>
      </section>

      {/* Valores da Empresa */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {valores.map((valor) => (
          <div key={valor.title} className="flex flex-col items-center text-center bg-white rounded-xl shadow-card p-8 transition hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
            {valor.icon}
            <h2 className="text-xl font-bold mb-1 text-primary">{valor.title}</h2>
            <p className="text-neutral-600">{valor.desc}</p>
          </div>
        ))}
      </section>

      {/* Benefícios / Destaques */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-primary">Por que escolher a Power House?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {beneficios.map((b) => (
              <div key={b.title} className="flex flex-col items-center bg-white rounded-xl shadow-card p-6 text-center transition hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
                {b.icon}
                <h3 className="font-semibold mb-1 text-primary">{b.title}</h3>
                <p className="text-neutral-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Secundárias */}
      <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link href="/shop" className="w-full sm:w-auto">
          <ButtonPrimary className="w-full sm:w-auto">
            Ver Produtos
          </ButtonPrimary>
        </Link>
        <Link href="/blog" className="w-full sm:w-auto">
          <ButtonPrimary className="w-full sm:w-auto bg-accent text-primary hover:bg-accent-dark">
            Ver Notícias
          </ButtonPrimary>
        </Link>
      </section>
    </>
  );
};

export default Home;
