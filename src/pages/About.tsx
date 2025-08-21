import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, TreePine, FlaskConical, Dna, Target, Lightbulb, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Dna,
      title: 'Genomics',
      description: 'Advanced genomic analysis of unique Patagonian yeasts',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FlaskConical,
      title: 'Biotechnology',
      description: 'Innovative biotechnological applications and solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Experimental Evolution',
      description: 'Targeted generation of hybrid strains for specialized applications',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TreePine,
      title: 'Nothofagus Research',
      description: 'Specialized study of yeasts from temperate forest bark',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Custom yeasts for brewing and whisky production',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Microscope,
      title: 'Applied Research',
      description: 'Bridging fundamental research with practical solutions',
      gradient: 'from-cyan-500 to-blue-500'
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
            className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mb-8"
          >
            <Microscope size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

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

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => window.history.back()}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-2xl opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('about.mission.description')}
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              {t('about.expertise.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-900 via-slate-900 to-teal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
                {t('about.vision.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;