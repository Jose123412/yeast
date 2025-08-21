import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Newspaper, Clock, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const News: React.FC = () => {
  const { t } = useLanguage();

  const newsArticles = [
    {
      id: 1,
      date: '2025-03-15',
      author: 'Dr. María González',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      date: '2025-03-08',
      author: 'Dr. Carlos Mendoza',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      date: '2025-03-01',
      author: 'Dr. Ana Silva',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      date: '2025-02-22',
      author: 'Dr. Roberto Fernández',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      date: '2025-02-15',
      author: 'Dr. Laura Martínez',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      date: '2025-02-08',
      author: 'Dr. Diego Ramírez',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl mb-8"
          >
            <Newspaper size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-6">
            {t('news.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => window.location.href = '/'}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>{t('common.backToHome')}</span>
        </motion.button>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={t(`newsPage.articles.${article.id}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                  {t(`newsPage.articles.${article.id}.title`)}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {t(`newsPage.articles.${article.id}.excerpt`)}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors duration-200">
                    {t('newsPage.readMore')}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;