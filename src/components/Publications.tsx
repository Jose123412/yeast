import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Publications: React.FC = () => {
  const { t } = useLanguage();


  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
            className="inline-block p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6"
          >
            <BookOpen size={32} className="text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('publications.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Publications grid */}
        <div className="text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-cyan-200 text-lg mb-8"
          >
            Explora nuestras investigaciones más recientes en genética molecular y biotecnología
          </motion.p>
        </div>

        {/* View All Publications Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/publications"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>{t('publications.viewAll')}</span>
            <BookOpen size={20} />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
