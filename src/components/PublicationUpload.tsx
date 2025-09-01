import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, X, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PublicationService } from '../services/publicationService';

interface PublicationUploadProps {
  onClose: () => void;
  onUploadSuccess: () => void;
}

const PublicationUpload: React.FC<PublicationUploadProps> = ({ onClose, onUploadSuccess }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    year: new Date().getFullYear(),
    authors: '',
    journal: '',
    doi: ''
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) || new Date().getFullYear() : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'pdf' | 'image') => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'pdf') {
        setPdfFile(file);
      } else {
        setImageFile(file);
      }
    }
  };

  const generateFileName = (originalName: string, type: 'pdf' | 'image'): string => {
    const timestamp = Date.now();
    const extension = originalName.split('.').pop();
    const baseName = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return `${baseName}-${timestamp}.${extension}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Por favor selecciona un archivo PDF');
      return;
    }

    setIsUploading(true);
    setUploadStatus('idle');
    setUploadProgress(0);

    try {
      // Subir PDF
      setUploadProgress(25);
      const pdfFileName = generateFileName(pdfFile.name, 'pdf');
      const pdfUrl = await PublicationService.uploadPDF(pdfFile, pdfFileName);

      // Subir imagen si existe
      setUploadProgress(50);
      let imageUrl = '';
      if (imageFile) {
        const imageFileName = generateFileName(imageFile.name, 'image');
        imageUrl = await PublicationService.uploadImage(imageFile, imageFileName);
      }

      // Crear publicación en la base de datos
      setUploadProgress(75);
      const publicationData = {
        ...formData,
        pdf_url: pdfUrl,
        image_url: imageUrl || undefined
      };

      await PublicationService.createPublication(publicationData);
      
      setUploadProgress(100);
      setUploadStatus('success');
      
      setTimeout(() => {
        onUploadSuccess();
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Error uploading publication:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl sm:rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Subir Nueva Publicación</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Título único */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Título de la publicación"
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Información básica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Año *
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                min="2000"
                max="2030"
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="sm:col-span-1 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Autores *
              </label>
              <input
                type="text"
                name="authors"
                value={formData.authors}
                onChange={handleInputChange}
                placeholder="Ej: González, M., Silva, A."
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Revista
              </label>
              <input
                type="text"
                name="journal"
                value={formData.journal}
                onChange={handleInputChange}
                placeholder="Ej: Nature Microbiology"
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DOI (opcional)
              </label>
              <input
                type="text"
                name="doi"
                value={formData.doi}
                onChange={handleInputChange}
                placeholder="10.1038/s41564-024-01234-5"
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Resumen único */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resumen *
            </label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleInputChange}
              rows={4}
              required
              placeholder="Resumen de la publicación..."
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
            />
          </div>

          {/* Archivos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* PDF Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Archivo PDF *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors duration-200">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'pdf')}
                  className="hidden"
                  id="pdf-upload"
                />
                <label htmlFor="pdf-upload" className="cursor-pointer">
                  <FileText size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    {pdfFile ? pdfFile.name : 'Seleccionar PDF'}
                  </p>
                </label>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Imagen (opcional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors duration-200">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image')}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    {imageFile ? imageFile.name : 'Seleccionar imagen'}
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
              />
            </div>
          )}

          {/* Status Messages */}
          {uploadStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
            >
              <Check size={20} />
              <span className="text-sm sm:text-base">Publicación subida exitosamente</span>
            </motion.div>
          )}

          {uploadStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
            >
              <AlertCircle size={20} />
              <span className="text-sm sm:text-base">Error al subir la publicación. Inténtalo de nuevo.</span>
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isUploading}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 text-sm sm:text-base"
            >
              Cancelar
            </button>
            <motion.button
              type="submit"
              disabled={isUploading || !pdfFile}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Subiendo... {uploadProgress}%</span>
                </>
              ) : (
                <>
                  <Upload size={16} />
                  <span>Subir Publicación</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PublicationUpload;