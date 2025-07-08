import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Seo from '../components/Seo';

const equipe = [
  {
    nome: 'Ana Silva',
    cargo: 'Fundadora & CEO',
    foto: '/img/team/ana.jpg',
  },
  {
    nome: 'Carlos Souza',
    cargo: 'CTO & Engenheiro de Produto',
    foto: '/img/team/carlos.jpg',
  },
  {
    nome: 'Marina Oliveira',
    cargo: 'Marketing & Comunidade',
    foto: '/img/team/marina.jpg',
  },
  {
    nome: 'João Pereira',
    cargo: 'Designer & UX',
    foto: '/img/team/joao.jpg',
  },
];

const About: NextPage = () => {
  return (
    <>
      <Seo
        title="Sobre a Power House Brasil"
        description="Conheça a história, missão e equipe da Power House Brasil, referência em ciclismo urbano."
      />
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Sobre a Power House Brasil</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <div className="flex-1 text-lg text-neutral-700">
            <p className="mb-4">
              A <span className="font-bold text-blue-700">Power House Brasil</span> nasceu da paixão pelo ciclismo urbano e do desejo de transformar cidades em lugares mais humanos, sustentáveis e conectados. Somos uma comunidade, uma loja e um hub de conteúdo para quem acredita que a bicicleta é mais do que um meio de transporte: é um estilo de vida.
            </p>
            <p>
              Nosso propósito é apoiar ciclistas urbanos com produtos de qualidade, informação relevante e iniciativas que promovam a mobilidade ativa. Acreditamos em inovação, sustentabilidade e no poder da coletividade para mudar realidades.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/img/about1.jpg"
              alt="Equipe Power House Brasil pedalando na cidade"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <Image
              src="/img/about2.jpg"
              alt="Loja e comunidade Power House Brasil"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-lg text-neutral-700 order-1 md:order-2">
            <p>
              Mais do que vender produtos, queremos inspirar pessoas a pedalar, compartilhar experiências e construir juntos uma cidade melhor. Seja bem-vindo à Power House Brasil!
            </p>
          </div>
        </div>
      </section>
      {/* Equipe */}
      <section className="bg-neutral-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Nosso Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {equipe.map((membro) => (
              <div key={membro.nome} className="flex flex-col items-center bg-white rounded-lg shadow p-6 text-center">
                <div className="relative w-28 h-28 mb-3">
                  <Image
                    src={membro.foto}
                    alt={membro.nome}
                    fill
                    className="object-cover rounded-full border-4 border-blue-100"
                    sizes="112px"
                  />
                </div>
                <span className="font-bold text-lg">{membro.nome}</span>
                <span className="text-blue-700 text-sm">{membro.cargo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
