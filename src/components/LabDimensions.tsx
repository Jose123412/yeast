import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, Calendar, ArrowLeft, Settings, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PublicationService } from '../services/publicationService';
import { AuthService } from '../services/authService';
import { Publication } from '../lib/supabase';
import AdminLogin from '../components/AdminLogin';
import PublicationUpload from '../components/PublicationUpload';

const Publications: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar publicaciones al montar el componente
  useEffect(() => {
    loadPublications();
    checkAdminStatus();
  }, []);

  const loadPublications = async () => {
    try {
      setIsLoading(true);
      const data = await PublicationService.getPublications();
      setPublications(data);
      setError(null);
    } catch (error) {
      console.error('Error loading publications:', error);
      setError('Error al cargar las publicaciones');
    } finally {
      setIsLoading(false);
    }
  };

  const checkAdminStatus = async () => {
    try {
      const isAuthorized = await AuthService.isAuthorizedUser();
      setIsAdmin(isAuthorized);
    } catch (error) {
      setIsAdmin(false);
    }
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowAdminLogin(false);
    setShowUploadForm(true);
  };

  const handleUploadSuccess = () => {
    loadPublications(); // Recargar publicaciones
    setShowUploadForm(false);
  };

  const handleAdminAccess = () => {
    if (isAdmin) {
      setShowUploadForm(true);
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleDeletePublication = async (id: string) => {
    if (!isAdmin) return;
    
    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta publicación?');
    if (!confirmed) return;

    try {
      await PublicationService.deletePublication(id);
      await loadPublications(); // Recargar lista
    } catch (error) {
      console.error('Error deleting publication:', error);
      alert('Error al eliminar la publicación');
    }
  };

  const getLocalizedTitle = (publication: Publication): string => {
    return publication.title || publication.title_en || publication.title_es;
  };

  const getLocalizedAbstract = (publication: Publication): string => {
    return publication.abstract || publication.abstract_en || publication.abstract_es;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando publicaciones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadPublications}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8"
          >
            <BookOpen size={32} className="text-white sm:w-12 sm:h-12" />
          </motion.div>
            {t('publications.title')}
          </h1>
            {t('publications.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>{t('common.backToHome')}</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <Settings size={14} className="sm:w-4 sm:h-4" />
            <span>{isAdmin ? 'Subir Publicación' : 'Administrar'}</span>
          </motion.button>
        </div>

        {/* Publications Grid */}
        {publications.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay publicaciones disponibles</h3>
            <p className="text-gray-500">Las publicaciones aparecerán aquí una vez que sean subidas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <motion.article
                key={publication.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Admin Delete Button */}
                {isAdmin && (
                  <button
                    onClick={() => handleDeletePublication(publication.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-300"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                <a
                  href={publication.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                    {publication.image_url ? (
                      <img
                        src={publication.image_url}
                        alt={getLocalizedTitle(publication)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                        <BookOpen size={48} className="text-blue-500" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </a>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{publication.year}</span>
                    </div>
                    {publication.journal && (
                      <span className="text-blue-600 font-medium">{publication.journal}</span>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {getLocalizedTitle(publication)}
                  </h2>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Autores:</strong> {publication.authors}
                  </p>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {getLocalizedAbstract(publication)}
                  </p>

                  {publication.doi && (
                    <p className="text-xs text-gray-500 mb-4">
                <div className="p-4 sm:p-6 lg:p-8">
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${dimension.gradient} rounded-lg sm:rounded-xl shadow-lg`}
                    <a
                      <Icon size={16} className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <div className="aspect-w-16 aspect-h-9 h-32 sm:h-40 lg:h-48 overflow-hidden relative">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Download size={16} />
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAdminLogin && (
          <AdminLogin
            onLogin={handleAdminLogin}
            onClose={() => setShowAdminLogin(false)}
          />
        )}

        {showUploadForm && (
          <PublicationUpload
            onClose={() => setShowUploadForm(false)}
            onUploadSuccess={handleUploadSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Publications;