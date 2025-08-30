import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowLeft, X, ChevronLeft, ChevronRight, Users, TreePine, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Outreach: React.FC = () => {
  const { t } = useLanguage();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // International Colleagues - 16 images
  const internationalPhotos = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `https://images.pexels.com/photos/${[
      '3184291', '2182970', '3184338', '2182975', '3184339', '2182969', '3184340', '2182974',
      '3184341', '2182976', '3184342', '2182977', '3184343', '2182978', '3184344', '3184345'
    ][i]}/pexels-photo-${[
      '3184291', '2182970', '3184338', '2182975', '3184339', '2182969', '3184340', '2182974',
      '3184341', '2182976', '3184342', '2182977', '3184343', '2182978', '3184344', '3184345'
    ][i]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    title: `International Sampling ${i + 1}`
  }));

  // Nothofagus pumilio - 22 images
  const nothofagusPhotos = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    src: `https://images.pexels.com/photos/${[
      '1181406', '2280549', '3735747', '256490', '3184418', '2280571', '3184291', '2182970',
      '3184338', '2182975', '3184339', '2182969', '3184340', '2182974', '3184341', '2182976',
      '3184342', '2182977', '3184343', '2182978', '3184344', '3184345'
    ][i]}/pexels-photo-${[
      '1181406', '2280549', '3735747', '256490', '3184418', '2280571', '3184291', '2182970',
      '3184338', '2182975', '3184339', '2182969', '3184340', '2182974', '3184341', '2182976',
      '3184342', '2182977', '3184343', '2182978', '3184344', '3184345'
    ][i]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    title: `Nothofagus Prospection ${i + 1}`
  }));

  // Puerto Williams - 9 images
  const puertoWilliamsPhotos1 = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `https://images.pexels.com/photos/${[
      '1181406', '2280549', '3735747', '256490', '3184418', '2280571', '3184291', '2182970', '3184338'
    ][i]}/pexels-photo-${[
      '1181406', '2280549', '3735747', '256490', '3184418', '2280571', '3184291', '2182970', '3184338'
    ][i]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    title: `Puerto Williams Sampling ${i + 1}`
  }));

  // Puerto Williams Additional - 20 images
  const puertoWilliamsPhotos2 = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `https://images.pexels.com/photos/${[
      '2182975', '3184339', '2182969', '3184340', '2182974', '3184341', '2182976', '3184342',
      '2182977', '3184343', '2182978', '3184344', '3184345', '1181406', '2280549', '3735747',
      '256490', '3184418', '2280571', '3184291'
    ][i]}/pexels-photo-${[
      '2182975', '3184339', '2182969', '3184340', '2182974', '3184341', '2182976', '3184342',
      '2182977', '3184343', '2182978', '3184344', '3184345', '1181406', '2280549', '3735747',
      '256490', '3184418', '2280571', '3184291'
    ][i]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    title: `Puerto Williams Extended ${i + 1}`
  }));

  const sections = [
    {
      id: 'international',
      photos: internationalPhotos,
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'nothofagus',
      photos: nothofagusPhotos,
      icon: TreePine,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'puerto-williams-1',
      photos: puertoWilliamsPhotos1,
      icon: MapPin,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'puerto-williams-2',
      photos: puertoWilliamsPhotos2,
      icon: MapPin,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const openGallery = (sectionId: string) => {
    setSelectedSection(sectionId);
    setSelectedImage(0);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedSection && selectedImage !== null) {
      const currentSection = sections.find(s => s.id === selectedSection);
      if (currentSection) {
        setSelectedImage((selectedImage + 1) % currentSection.photos.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedSection && selectedImage !== null) {
      const currentSection = sections.find(s => s.id === selectedSection);
      if (currentSection) {
        setSelectedImage(selectedImage === 0 ? currentSection.photos.length - 1 : selectedImage - 1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const currentSection = selectedSection ? sections.find(s => s.id === selectedSection) : null;

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
            <Globe size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-6">
            {t('outreach.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('outreach.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => window.location.href = '/'}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium mb-12 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>{t('common.backToHome')}</span>
        </motion.button>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    {t(`outreach.${section.id}.title`)}
                  </h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {t(`outreach.${section.id}.description`)}
                </p>

                {/* Photo Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  {section.photos.slice(0, 6).map((photo, photoIndex) => (
                    <motion.div
                      key={photo.id}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer"
                      onClick={() => openGallery(section.id)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openGallery(section.id)}
                  className={`px-8 py-3 bg-gradient-to-r ${section.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {t('outreach.viewAllPhotos', { count: section.photos.length })}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedSection && selectedImage !== null && currentSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <X size={20} />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image */}
                <div className="aspect-w-16 aspect-h-10 h-96 md:h-[500px]">
                  <img
                    src={currentSection.photos[selectedImage].src}
                    alt={currentSection.photos[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    {currentSection.photos[selectedImage].title}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {t(`outreach.${selectedSection}.title`)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t('outreach.imageCounter', { current: selectedImage + 1, total: currentSection.photos.length })}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Outreach;