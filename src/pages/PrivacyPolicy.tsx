import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('privacy.introduction'),
      content: t('privacy.introText')
    },
    {
      title: t('privacy.dataCollection'),
      content: t('privacy.dataCollectionText')
    },
    {
      title: t('privacy.dataUse'),
      content: t('privacy.dataUseText')
    },
    {
      title: t('privacy.dataProtection'),
      content: t('privacy.dataProtectionText')
    },
    {
      title: t('privacy.contact'),
      content: t('privacy.contactText')
    }
  ];

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
              className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6"
            >
              <Shield size={32} className="text-white" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-gray-600 mb-4">{t('privacy.lastUpdated')}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>{t('common.backToHome')}</span>
          </motion.button>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="mb-8 last:mb-0"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;