import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Congresses: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const congressPhotos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Congreso Internacional de Microbiología 2024',
      location: 'Barcelona, España',
      date: '15-18 Octubre 2024',
      description: 'Presentación de nuestros últimos hallazgos en genómica de levaduras patagónicas'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Simposio de Biotecnología Aplicada 2024',
      location: 'Santiago, Chile',
      date: '5-7 Septiembre 2024',
      description: 'Workshop sobre aplicaciones industriales de levaduras nativas'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conferencia de Genética Molecular 2024',
      location: 'Buenos Aires, Argentina',
      date: '20-22 Agosto 2024',
      description: 'Mesa redonda sobre evolución experimental en microorganismos'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Congreso Latinoamericano de Microbiología 2024',
      location: 'Lima, Perú',
      date: '10-13 Julio 2024',
      description: 'Poster session sobre biodiversidad microbiana en bosques templados'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Simposio Internacional de Fermentaciones 2024',
      location: 'Valdivia, Chile',
      date: '25-27 Junio 2024',
      description: 'Conferencia magistral sobre levaduras para producción de bebidas alcohólicas'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Congreso de Bioinformática 2024',
      location: 'Montevideo, Uruguay',
      date: '15-17 Mayo 2024',
      description: 'Presentación de herramientas computacionales para análisis genómico'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Encuentro de Jóvenes Investigadores 2024',
      location: 'Concepción, Chile',
      date: '8-10 Abril 2024',
      description: 'Participación de estudiantes de doctorado del laboratorio'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Congreso Mundial de Biotecnología 2023',
      location: 'São Paulo, Brasil',
      date: '12-15 Noviembre 2023',
      description: 'Simposio sobre aplicaciones sostenibles de microorganismos nativos'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conferencia de Ecología Microbiana 2023',
      location: 'Bariloche, Argentina',
      date: '20-23 Octubre 2023',
      description: 'Estudio de comunidades microbianas en ecosistemas patagónicos'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Simposio de Genómica Comparada 2023',
      location: 'Temuco, Chile',
      date: '5-7 Septiembre 2023',
      description: 'Análisis filogenético de levaduras del género Saccharomyces'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Congreso Internacional de Fermentación 2023',
      location: 'Mendoza, Argentina',
      date: '18-20 Agosto 2023',
      description: 'Innovaciones en procesos fermentativos para la industria vitivinícola'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Encuentro de Biotecnología Ambiental 2023',
      location: 'Valparaíso, Chile',
      date: '10-12 Julio 2023',
      description: 'Aplicaciones de microorganismos en biorremediación'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % congressPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? congressPhotos.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

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
            className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mb-8"
          >
            <Users size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-6">
            {t('congresses.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('congresses.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => window.location.href = '/'}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>{t('common.backToHome')}</span>
        </motion.button>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {congressPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => openModal(index)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group"
            >
              <div className="aspect-w-4 aspect-h-3 h-48 overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">{photo.title}</h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <MapPin size={12} />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300">
                  {photo.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar size={14} />
                  <span>{photo.date}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
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
                    src={congressPhotos[selectedImage].src}
                    alt={congressPhotos[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {congressPhotos[selectedImage].title}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{congressPhotos[selectedImage].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{congressPhotos[selectedImage].location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {congressPhotos[selectedImage].description}
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

export default Congresses;