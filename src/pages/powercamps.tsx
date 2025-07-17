import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import Image from 'next/image';
import { sanityClient } from '../lib/sanity';
import { GetStaticProps } from 'next';

interface Powercamp {
  _id: string;
  title: string;
  slug: { current: string };
  image?: any;
  date?: string;
  description?: string;
  year?: number;
}

interface PowerCampsProps {
  powercamps: Powercamp[];
}

const PowerCamps = ({ powercamps }: PowerCampsProps) => {
  return (
    <PageLayout>
      <Seo title="PowerCamps | Power House Brasil" description="Conheça nossos PowerCamps: experiências exclusivas para ciclistas que buscam performance, saúde e comunidade." />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">PowerCamps</h1>
        <p className="text-lg text-blue-900 mb-10 max-w-2xl">Nossos PowerCamps são experiências imersivas para ciclistas de todos os níveis, focadas em saúde, performance, aprendizado e conexão. Veja os eventos anuais abaixo!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {powercamps.length === 0 && (
            <div className="col-span-full text-center text-blue-900 font-semibold py-12">
              Nenhum Powercamp cadastrado ainda.
            </div>
          )}
          {powercamps.map((camp) => (
            <div key={camp._id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
              <span className="text-yellow-500 text-2xl font-bold mb-2">{camp.year || ''}</span>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">{camp.title}</h2>
              {camp.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={camp.image.asset?.url || ''}
                    alt={camp.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <p className="text-blue-900 mb-2">{camp.description}</p>
              {camp.date && <span className="text-neutral-500 text-sm">{new Date(camp.date).toLocaleDateString('pt-BR')}</span>}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const powercamps = await sanityClient.fetch(
    `*[_type == "powercamp"] | order(year desc, date desc)[0...5] {
      _id,
      title,
      slug,
      image,
      date,
      description,
      year
    }`
  );
  return {
    props: { powercamps },
    revalidate: 60,
  };
};

export default PowerCamps; 