import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import { ShieldCheck, Bike, Heart } from 'lucide-react';
import ButtonPrimary from '../components/ButtonPrimary';

const planos = [
  {
    nome: 'Plano Essencial',
    valor: 'R$ 99/mês',
    beneficios: [
      { icon: <Bike className="w-5 h-5 mr-2 text-yellow-500" />, text: 'Acesso a treinos semanais' },
      { icon: <Heart className="w-5 h-5 mr-2 text-yellow-500" />, text: 'Suporte nutricional básico' },
    ],
  },
  {
    nome: 'Plano Performance',
    valor: 'R$ 199/mês',
    beneficios: [
      { icon: <Bike className="w-5 h-5 mr-2 text-yellow-500" />, text: 'Treinos avançados e personalizados' },
      { icon: <ShieldCheck className="w-5 h-5 mr-2 text-yellow-500" />, text: 'Acompanhamento individual' },
      { icon: <Heart className="w-5 h-5 mr-2 text-yellow-500" />, text: 'Consultas nutricionais mensais' },
    ],
  },
];

const Planos = () => {
  return (
    <PageLayout>
      <Seo title="Planos | Power House Brasil" description="Conheça nossos planos de saúde e performance para ciclistas. Escolha o ideal para você!" />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Planos</h1>
        <p className="text-lg text-blue-900 mb-10 max-w-2xl">Escolha o plano ideal para sua jornada no ciclismo. Todos os planos incluem acesso à comunidade Power House Brasil.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {planos.map((plano) => (
            <div key={plano.nome} className="bg-white rounded-2xl shadow-md p-8 flex-1 flex flex-col items-start border border-yellow-100 min-w-[260px] max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">{plano.nome}</h2>
              <span className="text-2xl font-bold text-yellow-500 mb-4">{plano.valor}</span>
              <ul className="mb-6 space-y-2">
                {plano.beneficios.map((b, idx) => (
                  <li key={idx} className="flex items-center text-blue-900 text-base">
                    {b.icon}
                    {b.text}
                  </li>
                ))}
              </ul>
              <ButtonPrimary className="w-full text-base py-3 rounded-xl" disabled>
                Assinar (em breve)
              </ButtonPrimary>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Planos; 