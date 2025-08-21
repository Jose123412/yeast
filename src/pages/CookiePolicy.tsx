import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, ArrowLeft, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCookies } from '../context/CookieContext';

const CookiePolicy: React.FC = () => {
  const { t } = useLanguage();
  const { resetCookiePreferences } = useCookies();

  const handleResetCookies = () => {
    resetCookiePreferences();
    alert('Las preferencias de cookies han sido restablecidas. El banner aparecerá nuevamente.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6"
            >
              <Cookie size={32} className="text-white" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-4">
              {t('cookies.page.title')}
            </h1>
            <p className="text-gray-600 mb-4">{t('cookies.page.description')}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>{t('common.backToHome')}</span>
          </motion.button>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* What are cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                {t('cookies.page.whatAreCookies')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('cookies.page.whatAreCookiesText')}
              </p>
            </motion.div>

            {/* Types of cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                {t('cookies.page.typesOfCookies')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {t('cookies.page.essential')}
                  </h3>
                  <p className="text-green-700">
                    {t('cookies.page.essentialText')}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {t('cookies.page.analytics')}
                  </h3>
                  <p className="text-blue-700">
                    {t('cookies.page.analyticsText')}
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    {t('cookies.page.preferences')}
                  </h3>
                  <p className="text-purple-700">
                    {t('cookies.page.preferencesText')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reset cookies section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-8"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                {t('cookies.page.resetCookies')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('cookies.page.resetText')}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResetCookies}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <RotateCcw size={20} />
                <span>{t('cookies.page.resetButton')}</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;