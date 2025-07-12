import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Seo
        title="Power House Brasil | Saúde e Performance no Ciclismo"
        description="A Power House Brasil é referência em saúde, performance e comunidade para ciclistas. Conheça nossa história."
      />
      {/* Hero visualmente impactante */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg mb-12">
        <Image
          src="/img/static/hero.jpg"
          alt="Ciclista pedalando com saúde e performance"
          fill
          className="object-cover object-center absolute inset-0 z-0 rounded-2xl"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10 rounded-2xl" aria-hidden="true" />
        <div className="relative z-20 w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-accent drop-shadow-lg mb-4">Power House Brasil</h1>
          <p className="text-lg md:text-2xl text-white mb-4 max-w-xl">Saúde, performance e comunidade para ciclistas urbanos e esportivos.</p>
          <ButtonPrimary as="a" href="/shop/compre-agora" className="mt-2 text-lg px-8 py-4 rounded-xl shadow-lg">
            Conheça nossos produtos
          </ButtonPrimary>
        </div>
      </section>
      {/* Seção Quem Somos */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 bg-white rounded-2xl shadow-md p-8 md:p-16">
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quem somos</h2>
          <p className="text-base md:text-lg text-foreground/90 mb-2 max-w-lg">
            A Power House Brasil nasceu da paixão pelo ciclismo e do desejo de promover saúde, performance e conexão entre ciclistas. Somos uma comunidade que acredita no poder do esporte para transformar vidas, oferecendo informação, suporte e inspiração para quem pedala.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/img/team/DSCF8250.JPG"
            alt="Equipe Power House Brasil"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
