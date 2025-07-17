import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="OCE Powerhouse | Somos campeões do mundo!"
        description="A OCE Powerhouse é referência em aulas personalizadas de ciclismo, saúde e performance. Conheça nossa história."
      />
      {/* Hero com foto do Hugo e frase impactante */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg mb-12">
        <Image
          src="/img/team/67361169.jpg"
          alt="Hugo, CEO da OCE Powerhouse, campeão mundial de ciclismo"
          fill
          className="object-cover object-center absolute inset-0 z-0 rounded-2xl"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10 rounded-2xl" aria-hidden="true" />
        <div className="relative z-20 w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">Somos campeões do mundo!</h1>
          <p className="text-lg md:text-2xl text-white mb-4 max-w-xl">A OCE Powerhouse é referência em ciclismo, saúde e performance. Venha fazer parte dessa comunidade campeã!</p>
        </div>
      </section>
      {/* Benefícios/Diferenciais */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
          <Image src="/img/static/logo.png" alt="Aulas Personalizadas" width={48} height={48} className="mb-2" />
          <h3 className="text-lg font-bold text-primary mb-2">Aulas Personalizadas</h3>
          <p className="text-neutral-700 text-sm">Treinos sob medida para cada aluno, com acompanhamento individual dos coaches.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
          <Image src="/img/static/logo.png" alt="Coaches Campeões" width={48} height={48} className="mb-2" />
          <h3 className="text-lg font-bold text-primary mb-2">Coaches Campeões</h3>
          <p className="text-neutral-700 text-sm">Equipe formada por atletas e treinadores premiados, referência no ciclismo nacional e internacional.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
          <Image src="/img/static/logo.png" alt="Comunidade Exclusiva" width={48} height={48} className="mb-2" />
          <h3 className="text-lg font-bold text-primary mb-2">Comunidade Exclusiva</h3>
          <p className="text-neutral-700 text-sm">Faça parte de uma rede de ciclistas apaixonados, eventos, desafios e networking.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
          <Image src="/img/static/logo.png" alt="Resultados Reais" width={48} height={48} className="mb-2" />
          <h3 className="text-lg font-bold text-primary mb-2">Resultados Reais</h3>
          <p className="text-neutral-700 text-sm">Transforme sua saúde, performance e qualidade de vida com acompanhamento profissional.</p>
        </div>
      </section>
      {/* Apresentação da OCE Powerhouse */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 bg-white rounded-2xl shadow-md p-8 md:p-16 mb-12">
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Como funciona a OCE Powerhouse?</h2>
          <p className="text-base md:text-lg text-foreground/90 mb-2 max-w-lg">
            Nossos coaches são especialistas em ciclismo e oferecem aulas personalizadas para todos os níveis. O acompanhamento é feito por planos, com foco em evolução, saúde e performance. Aqui, você encontra uma comunidade que valoriza o esporte e a transformação de vidas.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/img/team/DSCF8250.JPG"
            alt="Equipe OCE Powerhouse"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </section>
      {/* Vídeo de apresentação */}
      <section className="w-full flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Conheça a OCE Powerhouse</h2>
        <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI"
            title="Apresentação OCE Powerhouse"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
      {/* Depoimentos */}
      <section className="w-full max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">O que dizem nossos alunos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
            <Image src="/img/team/67361170.jpg" alt="Depoimento 1" width={56} height={56} className="mb-2 rounded-full object-cover" />
            <p className="text-neutral-700 italic mb-2">“A OCE Powerhouse mudou minha vida no ciclismo. Evoluí muito com o acompanhamento dos coaches!”</p>
            <span className="text-primary font-semibold">Lucas M.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
            <Image src="/img/team/67384541.jpg" alt="Depoimento 2" width={56} height={56} className="mb-2 rounded-full object-cover" />
            <p className="text-neutral-700 italic mb-2">“A comunidade é incrível, os eventos são motivadores e o suporte é diferenciado.”</p>
            <span className="text-primary font-semibold">Marina O.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-yellow-100">
            <Image src="/img/team/DSCF8965.JPG" alt="Depoimento 3" width={56} height={56} className="mb-2 rounded-full object-cover" />
            <p className="text-neutral-700 italic mb-2">“Os planos são acessíveis e realmente entregam resultado. Recomendo para todos que querem evoluir!”</p>
            <span className="text-primary font-semibold">Fernanda S.</span>
          </div>
        </div>
      </section>
      {/* Chamada para Blog */}
      <section className="w-full max-w-6xl mx-auto mb-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Conteúdo para ciclistas</h2>
        <p className="text-neutral-700 mb-6 text-center max-w-2xl">Confira dicas, notícias e novidades no nosso blog. Informação de qualidade para quem quer pedalar mais e melhor!</p>
        <Link href="/blog">
          <ButtonPrimary className="text-base px-8 py-3 rounded-xl">Acessar Blog</ButtonPrimary>
        </Link>
      </section>
      {/* Chamada para Powercamps */}
      <section className="w-full max-w-6xl mx-auto mb-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Powercamps Anuais</h2>
        <p className="text-neutral-700 mb-6 text-center max-w-2xl">Participe dos nossos eventos exclusivos, com experiências imersivas, treinos, workshops e integração entre ciclistas, coaches e convidados especiais.</p>
        <Link href="/powercamps">
          <ButtonPrimary className="text-base px-8 py-3 rounded-xl">Saiba mais sobre os Powercamps</ButtonPrimary>
        </Link>
      </section>
      {/* Parceiros/Patrocinadores */}
      <section className="w-full max-w-6xl mx-auto mb-20 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Nossos Parceiros</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <a href="https://alquimiadasaude.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Image src="/img/static/logo.png" alt="Alquimia da Saúde" width={64} height={64} className="rounded-full bg-white p-2" />
            <span className="text-primary font-semibold">Alquimia da Saúde</span>
          </a>
          {/* Adicione mais parceiros aqui */}
        </div>
      </section>
      {/* CTA para Planos */}
      <section className="w-full flex flex-col items-center justify-center mb-16">
        <ButtonPrimary as="a" href="/planos" className="text-lg px-8 py-4 rounded-xl shadow-lg">
          Conheça nossos planos
        </ButtonPrimary>
      </section>
    </>
  );
};

export default Home;
