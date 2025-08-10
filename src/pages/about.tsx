import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';

const membros = [
  {
    nome: 'Hugo Prado',
    cargo: 'Fundador & CEO',
    foto: '/img/team/hugo.jpg',
  },
  {
    nome: 'Maria Silva',
    cargo: 'Head de Marketing',
    foto: '/img/team/maria.jpg',
  },
  {
    nome: 'Carlos Santos',
    cargo: 'Especialista em Performance',
    foto: '/img/team/carlos.jpg',
  },
  {
    nome: 'Ana Costa',
    cargo: 'Nutricionista Esportiva',
    foto: '/img/team/ana.jpg',
  },
  {
    nome: 'João Oliveira',
    cargo: 'Designer & UX',
    foto: '/img/team/joao.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: NextPage = () => {
  return (
    <>
      <Seo
        title="Sobre a Power House Brasil"
        description="Conheça a história, missão e equipe da Power House Brasil, referência em ciclismo urbano."
      />
      <motion.section
        className="max-w-4xl mx-auto py-12 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], when: 'beforeChildren', staggerChildren: 0.12 }}
      >
        <motion.h1 className="text-3xl font-bold mb-6 text-center" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          Sobre a Power House Brasil
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <motion.p className="flex-1 text-lg text-neutral-700" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            A Power House Brasil nasceu da paixão
            pelo ciclismo urbano e do desejo de transformar cidades em lugares mais humanos, sustentáveis e conectados. Somos uma comunidade, uma loja e um hub de conteúdo para
            quem acredita que a bicicleta é mais do que um meio de transporte: é um estilo de
            vida. Nossa missão é criar conteúdo
            relevante e iniciativas que promovam a mobilidade ativa. Acreditamos em inovação,
            comunidade e sustentabilidade.
          </motion.p>
          <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <Image
              src="/img/static/logo.png"
              alt="Logo Power House Brasil"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div className="flex-1 flex justify-center order-2 md:order-1" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Image
              src="/img/static/logo.png"
              alt="Ciclismo urbano"
              width={320}
              height={240}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
          <motion.p className="flex-1 text-lg text-neutral-700 order-1 md:order-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Queremos conectar pessoas, promover
            experiências e construir juntos uma cidade melhor. Seja bem-vindo à Power House
            Brasil!
          </motion.p>
        </div>
      </motion.section>
      <motion.section 
        className="bg-neutral-50 py-12 px-4" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], when: 'beforeChildren', staggerChildren: 0.12 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl font-bold mb-8 text-center" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Nossa Equipe
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" 
            variants={containerVariants}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], when: 'beforeChildren', staggerChildren: 0.12 }}
          >
            {membros.map((membro) => (
              <motion.div
                key={membro.nome}
                className="flex flex-col items-center bg-white rounded-lg shadow p-6 text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                tabIndex={0}
                aria-label={`Card do membro ${membro.nome}`}
              >
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  width={120}
                  height={120}
                  className="rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{membro.nome}</h3>
                <p className="text-neutral-600 text-sm">{membro.cargo}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
