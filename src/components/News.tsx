import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const News: React.FC = () => {
  const { t } = useLanguage();

  const newsItems = ['1', '2', '3'];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-slate-100 to-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6"
          >
            <Newspaper size={32} className="text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-4">
            {t('news.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {newsItems.map((news, index) => (
            <motion.div
              key={news}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-gray-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <div className="p-1 bg-emerald-100 rounded-lg">
                    <Calendar size={14} className="text-emerald-600" />
                  </div>
                <span>{t(`news.${news}.date`)}</span>
              </div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                {t(`news.${news}.title`)}
              </h3>
                <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                  <span className="text-sm font-semibold">Read more</span>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;