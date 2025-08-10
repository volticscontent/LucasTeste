import React from 'react';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { sanityClient } from '../lib/sanity';

interface PowerCamp {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  image: any;
}

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PowerCamps = () => {
  const [camps, setCamps] = React.useState<PowerCamp[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCamps = async () => {
      try {
        setLoading(false);
        setCamps([]);
      } catch (error) {
        console.error('Erro ao buscar PowerCamps:', error);
        setLoading(false);
      }
    };

    fetchCamps();
  }, []);

  return (
    <>
      <Seo title="PowerCamps | Power House Brasil" description="Conheça nossos PowerCamps: experiências exclusivas para ciclistas que buscam performance, saúde e comunidade." />
      <motion.section
        className="max-w-5xl mx-auto px-4 py-12 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], when: 'beforeChildren', staggerChildren: 0.12 }}
      >
        <motion.h1 className="text-3xl md:text-4xl font-bold text-black mb-4" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          PowerCamps
        </motion.h1>
        <motion.p className="text-lg text-[#1a1a1a] mb-10 max-w-2xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Experiências exclusivas que combinam treino, natureza e comunidade para ciclistas apaixonados.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <motion.div className="col-span-full text-center text-black font-semibold py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              Carregando PowerCamps...
            </motion.div>
          ) : camps.length > 0 ? (
            camps.map((camp) => (
              <motion.div key={camp._id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start" variants={cardVariants} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} tabIndex={0} aria-label={`Card do powercamp ${camp.title}`}>
                {camp.image && (
                  <motion.div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                    <Image
                      src={camp.image}
                      alt={camp.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <h2 className="text-xl font-semibold text-blue-900 mb-2">{camp.title}</h2>
                <p className="text-neutral-600 mb-4 flex-1">{camp.description}</p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span className="text-neutral-500 text-sm">{new Date(camp.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{camp.participants} participantes</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div className="col-span-full text-center text-black font-semibold py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              Nenhum PowerCamp disponível no momento. Fique ligado nas nossas redes sociais!
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default PowerCamps; 