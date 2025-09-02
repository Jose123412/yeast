import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Microscope, FlaskConical, TreePine, Search, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PriorityAreas: React.FC = () => {
  const { t } = useLanguage();

  const areas = [
    {
      id: 1,
      icon: Dna,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Microscope,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      icon: FlaskConical,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: TreePine,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: Search,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      icon: BarChart3,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t('priority.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl mb-6 shadow-lg`}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                  {t(`priority.${area.id}`)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriorityAreas;