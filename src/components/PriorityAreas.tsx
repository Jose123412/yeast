import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Dna, Leaf, TreePine, Beaker, Search, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PriorityAreas: React.FC = () => {
  const { t } = useLanguage();

  const areas = [
    { id: '1', icon: Dna, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
    { id: '2', icon: Leaf, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' },
    { id: '3', icon: TreePine, color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/20' },
    { id: '4', icon: Beaker, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/20' },
    { id: '5', icon: Search, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/20' },
    { id: '6', icon: Database, color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/20' },
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6"
          >
            <Microscope size={32} className="text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
            {t('priority.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                className={`${area.bgColor} backdrop-blur-sm border ${area.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl mb-6 shadow-lg relative z-10`}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10 group-hover:text-slate-900 transition-colors duration-300">
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