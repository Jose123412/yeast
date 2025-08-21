import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCookies } from '../context/CookieContext';

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const { showBanner, acceptAllCookies, rejectAllCookies, hideBanner } = useCookies();

  const handleReadMore = () => {
    window.open('/cookies', '_blank');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Cookie size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t('cookies.banner.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookies.banner.message')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReadMore}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  {t('cookies.banner.readMore')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={rejectAllCookies}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700 font-medium text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {t('cookies.banner.reject')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={acceptAllCookies}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('cookies.banner.accept')}
                </motion.button>
              </div>
              
              <button
                onClick={hideBanner}
                className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;