import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';
import Link from 'next/link';
import { motion } from 'framer-motion';

const benefitCardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const } },
  whileHover: { scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' },
};

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" as const } },
};

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="OCE Powerhouse | Somos campeões do mundo!"
        description="A OCE Powerhouse é referência em aulas personalizadas de ciclismo, saúde e performance. Conheça nossa história."
      />
      {/* Hero com design mobile melhorado */}
      <motion.section
        className="relative w-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden rounded-none md:rounded-2xl shadow-none md:shadow-lg mb-8 md:mb-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/img/static/hero.jpg"
            alt="OCE Powerhouse - Campeões do mundo"
            fill
            className="object-cover object-center absolute inset-0 z-0 rounded-2xl"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10 rounded-2xl" aria-hidden="true" />
          <motion.div
            className="relative z-20 w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
            >
              Somos campeões do mundo!
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-white mb-4 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
            >
              A OCE Powerhouse é referência em ciclismo, saúde e performance. Venha fazer parte dessa comunidade campeã!
            </motion.p>
          </motion.div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden w-full h-full flex flex-col">
          <div className="relative h-2/3 w-full">
            <Image
              src="/img/static/hero.jpg"
              alt="OCE Powerhouse - Campeões do mundo"
              fill
              className="object-cover object-center rounded-t-2xl"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 rounded-t-2xl" aria-hidden="true" />
          </div>
          <motion.div
            className="relative h-1/3 w-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex flex-col items-center justify-center px-8 py-6 rounded-b-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          >
            <motion.h1
              className="text-4xl font-extrabold text-black mb-3 text-center leading-tight font-roboto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
            >
              Somos campeões do mundo!
            </motion.h1>
            <motion.p
              className="text-xl text-gray-900 mb-4 text-center max-w-2xl leading-relaxed font-roboto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
            >
              A OCE Powerhouse é referência em ciclismo, saúde e performance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
            >
              <ButtonPrimary 
                as="a" 
                href="/planos" 
                className="bg-black text-yellow-400 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold shadow-lg font-roboto"
              >
                Conheça nossos planos
              </ButtonPrimary>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden w-full h-full flex flex-col">
          {/* Image Section - Top */}
          <div className="relative w-full h-1/2 min-h-[50vh]">
            <Image
              src="/img/static/hero.jpg"
              alt="OCE Powerhouse - Campeões do mundo"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" aria-hidden="true" />
            
            {/* Logo overlay on image */}
            <motion.div
              className="absolute top-6 left-4 right-4 flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
            </motion.div>
          </div>
          
          {/* Content Section - Bottom */}
          <motion.div
            className="relative w-full h-1/2 min-h-[50vh] bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex flex-col items-center justify-center px-6 py-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          >
            <motion.div
              className="text-center z-10 relative max-w-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl font-extrabold text-black mb-4 leading-tight font-roboto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Somos
                <br />
                <span className="text-2xl sm:text-3xl bg-black text-yellow-400 px-3 py-1 rounded-lg inline-block transform -rotate-1 shadow-lg">campeões</span>
                <br />
                <span className="text-2xl sm:text-3xl">do mundo!</span>
              </motion.h1>
              
              <motion.p
                className="text-base sm:text-lg text-gray-900 mb-6 leading-relaxed font-roboto font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Referência em ciclismo, saúde e performance
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonPrimary 
                  as="a" 
                  href="/planos" 
                  className="bg-black text-yellow-400 hover:bg-gray-900 transition-all duration-300 px-6 py-3 text-base font-semibold shadow-lg font-roboto rounded-lg border-2 border-black hover:border-gray-900 hover:shadow-xl"
                >
                  Ver Planos →
                </ButtonPrimary>
              </motion.div>
            </motion.div>
            
            {/* Background decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-black/5 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 1.2, duration: 1, type: 'spring' }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-10 h-10 bg-black/5 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ delay: 1.4, duration: 1, type: 'spring' }}
            />
            <motion.div
              className="absolute top-1/3 left-4 w-6 h-6 bg-black/5 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6, type: 'spring' }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Benefícios/Diferenciais */}
      <motion.section
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 px-4"
        variants={sectionFade}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="bg-white p-6 rounded-xl shadow-card flex flex-col items-center text-center cursor-pointer"
          variants={benefitCardVariants}
          whileHover="whileHover"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">Campeões mundiais</h3>
          <p className="text-black text-sm">Metodologia comprovada por resultados em competições internacionais</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-card flex flex-col items-center text-center cursor-pointer"
          variants={benefitCardVariants}
          whileHover="whileHover"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">👨‍⚕️</span>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">Acompanhamento médico</h3>
          <p className="text-black text-sm">Treinos personalizados com base em análise médica completa</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-card flex flex-col items-center text-center cursor-pointer"
          variants={benefitCardVariants}
          whileHover="whileHover"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">Tecnologia avançada</h3>
          <p className="text-black text-sm">Plataforma digital integrada para acompanhamento em tempo real</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-card flex flex-col items-center text-center cursor-pointer"
          variants={benefitCardVariants}
          whileHover="whileHover"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🤝</span>
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">Comunidade forte</h3>
          <p className="text-black text-sm">Faça parte de uma comunidade apaixonada por ciclismo e saúde</p>
        </motion.div>
      </motion.section>

      {/* História */}
      <motion.section
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-20 px-4"
        variants={sectionFade}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1">
          <Image
            src="/img/static/logo.jpg"
            alt="OCE Powerhouse"
            width={500}
            height={300}
            className="rounded-xl shadow-lg w-full max-w-md mx-auto md:mx-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-roboto">Nossa História</h2>
          <p className="text-black mb-4 leading-relaxed">
            A OCE Powerhouse nasceu da paixão pelo ciclismo e do sonho de levar atletas ao mais alto nível mundial. 
            Fundada por Hugo Hocevar, campeão mundial de ciclismo, nossa metodologia combina ciência do esporte, 
            medicina esportiva e tecnologia de ponta.
          </p>
          <p className="text-black mb-6 leading-relaxed">
            Hoje, somos referência em treinamento personalizado, com resultados comprovados em competições 
            internacionais e na transformação da vida de centenas de atletas.
          </p>
          <ButtonPrimary as="a" href="/about" className="inline-block font-roboto">
            Saiba mais sobre nós
          </ButtonPrimary>
        </div>
      </motion.section>

      {/* Depoimentos */}
      <motion.section
        className="w-full max-w-6xl mx-auto mb-20 px-4"
        variants={sectionFade}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-roboto">O que nossos atletas dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-card"
            variants={benefitCardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-black mb-4 italic leading-relaxed">
              "A OCE Powerhouse mudou completamente minha abordagem ao ciclismo. O acompanhamento personalizado 
              e a metodologia científica me levaram a resultados que nunca imaginei ser possível."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">M</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Marina Santos</h4>
                <p className="text-sm text-black">Ciclista amadora</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-card"
            variants={benefitCardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-black mb-4 italic leading-relaxed">
              "Treinar com a OCE é uma experiência única. A atenção aos detalhes, o suporte médico e 
              a tecnologia avançada fazem toda a diferença no meu desenvolvimento como atleta."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">R</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Roberto Silva</h4>
                <p className="text-sm text-black">Triatleta profissional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Parceiros/Patrocinadores */}
      <motion.section
        className="w-full max-w-6xl mx-auto mb-20 px-4 flex flex-col items-center"
        variants={sectionFade}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-roboto">Nossos Parceiros</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <motion.a 
            href="https://alquimiadasaude.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image 
              src="/img/static/logo-preta.png" 
              alt="Alquimia da Saúde" 
              width={48} 
              height={24} 
              className="object-contain" 
            />
            <span className="text-primary font-semibold font-roboto">Alquimia da Saúde</span>
          </motion.a>
        </div>
      </motion.section>
      
      {/* CTA para Planos */}
      <motion.section
        className="w-full flex flex-col items-center justify-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ButtonPrimary as="a" href="/planos" className="text-lg px-8 py-4 rounded-xl shadow-lg">
          Conheça nossos planos
        </ButtonPrimary>
      </motion.section>
    </>
  );
};

export default Home;
