import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';

const PowerCamps = () => {
  return (
    <PageLayout>
      <Seo title="PowerCamps | Power House Brasil" description="Conheça nossos PowerCamps: experiências exclusivas para ciclistas que buscam performance, saúde e comunidade." />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">PowerCamps</h1>
        <p className="text-lg text-blue-900 mb-10 max-w-2xl">Nossos PowerCamps são experiências imersivas para ciclistas de todos os níveis, focadas em saúde, performance, aprendizado e conexão. Em breve, mais detalhes!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
            <span className="text-yellow-500 text-2xl font-bold mb-2">#1</span>
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Imersão em Treinamento</h2>
            <p className="text-blue-900 mb-2">Bloco informativo sobre treinos, workshops e vivências práticas.</p>
            <span className="text-neutral-500 text-sm">Conteúdo dinâmico em breve</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
            <span className="text-yellow-500 text-2xl font-bold mb-2">#2</span>
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Comunidade & Networking</h2>
            <p className="text-blue-900 mb-2">Bloco informativo sobre integração, eventos e experiências coletivas.</p>
            <span className="text-neutral-500 text-sm">Conteúdo dinâmico em breve</span>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PowerCamps; 