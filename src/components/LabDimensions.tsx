import React from 'react';
import { motion } from 'framer-motion';
import { Users, FlaskConical, Megaphone, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LabDimensions: React.FC = () => {
  const { t } = useLanguage();

  const dimensions = [
    {
      id: 1,
      icon: BookOpen,
      href: '/congresses',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      icon: FlaskConical,
      href: '/outreach',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      icon: Megaphone,
      href: '/dissemination',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      icon: Users,
      href: '/team',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t('labdimensions.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dimensions.map((dimension, index) => {
            const Icon = dimension.icon;
            return (
              <motion.a
                key={dimension.id}
                href={dimension.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                    <img
                      src={dimension.image}
                      alt={t(`labdimensions.${dimension.id}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${dimension.gradient} rounded-xl shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {t(`labdimensions.${dimension.id}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t(`labdimensions.${dimension.id}.description`)}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabDimensions;