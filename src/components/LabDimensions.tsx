import React from 'react';
import { motion } from 'framer-motion';
import { Users, FlaskConical, Megaphone, GraduationCap, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LabDimensions: React.FC = () => {
  const { t } = useLanguage();

  const dimensions = [
    { 
      id: '1', 
      icon: GraduationCap, 
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      id: '2', 
      icon: FlaskConical, 
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-teal-600'
    },
    { 
      id: '3', 
      icon: Megaphone, 
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      id: '4', 
      icon: Users, 
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-500 to-blue-600'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6"
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-teal-800 bg-clip-text text-transparent mb-4">
            {t('labdimensions.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {dimensions.map((dimension, index) => {
            const Icon = dimension.icon;
            return (
              <motion.div
                key={dimension.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                  <img
                    src={dimension.image}
                    alt={t(`labdimensions.${dimension.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${dimension.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${dimension.gradient} rounded-xl shadow-lg`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      {t(`labdimensions.${dimension.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(`labdimensions.${dimension.id}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabDimensions;