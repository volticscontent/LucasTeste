import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ana Souza',
    role: 'Fundadora & Coach',
    image: '/img/team/67361169.jpg',
    link: '#',
  },
  {
    name: 'Carlos Silva',
    role: 'Nutricionista',
    image: '/img/team/67361170.jpg',
    link: '#',
  },
  {
    name: 'Fernanda Lima',
    role: 'Fisioterapeuta',
    image: '/img/team/67384541.jpg',
    link: '#',
  },
];

const QuemEoTime = () => {
  return (
    <PageLayout>
      <Seo title="Quem é o Time | Power House Brasil" description="Conheça o time multidisciplinar da Power House Brasil: saúde, performance e inspiração para ciclistas." />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Quem é o Time</h1>
        <p className="text-lg text-blue-900 mb-10 max-w-2xl">Nosso time é formado por profissionais apaixonados por ciclismo, saúde e performance. Acreditamos na força do coletivo e na inspiração mútua para transformar vidas.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full mb-4 object-cover" />
              <h2 className="text-lg font-semibold text-blue-900 mb-1">{member.name}</h2>
              <span className="text-yellow-500 font-medium mb-2">{member.role}</span>
              {member.link && (
                <a href={member.link} className="text-blue-900 underline text-sm hover:text-blue-700 transition-colors" tabIndex={0} aria-label={`Ver perfil de ${member.name}`}>Ver perfil</a>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default QuemEoTime; 