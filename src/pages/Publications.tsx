import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ArrowLeft, BookOpen, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Publications: React.FC = () => {
  const { t } = useLanguage();

  const publications = [
    {
      id: 1,
      title: 'Genomic Diversity of Native Yeasts in Chilean Patagonian Forests',
      authors: 'González, M., Mendoza, C., Silva, A.',
      journal: 'Nature Microbiology',
      year: '2024',
      pdfUrl: '/papers/genomic-diversity-patagonian-yeasts.pdf',
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'This study presents a comprehensive genomic analysis of native yeast species found in the bark of Nothofagus trees across Chilean Patagonia.'
    },
    {
      id: 2,
      title: 'Biotechnological Applications of Nothofagus-Associated Yeasts',
      authors: 'Fernández, R., Martínez, L., Ramírez, D.',
      journal: 'Applied and Environmental Microbiology',
      year: '2024',
      pdfUrl: '/papers/biotechnological-applications-nothofagus-yeasts.pdf',
      thumbnail: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'We explore the potential biotechnological applications of yeasts isolated from Nothofagus bark, focusing on fermentation processes.'
    },
    {
      id: 3,
      title: 'Experimental Evolution of Hybrid Yeast Strains for Whisky Production',
      authors: 'López, P., Torres, A., Herrera, V.',
      journal: 'Journal of Industrial Microbiology',
      year: '2023',
      pdfUrl: '/papers/experimental-evolution-hybrid-yeasts-whisky.pdf',
      thumbnail: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'This research demonstrates the successful development of hybrid yeast strains optimized for whisky production through experimental evolution.'
    },
    {
      id: 4,
      title: 'Climate Change Impact on Patagonian Yeast Biodiversity',
      authors: 'Morales, S., Vega, C., Castro, J.',
      journal: 'Global Change Biology',
      year: '2023',
      pdfUrl: '/papers/climate-change-patagonian-yeast-biodiversity.pdf',
      thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'An assessment of how climate change affects the biodiversity and distribution of native yeasts in Patagonian ecosystems.'
    },
    {
      id: 5,
      title: 'Novel Fermentation Pathways in Temperate Forest Yeasts',
      authors: 'Rojas, F., Sánchez, M., Muñoz, I.',
      journal: 'FEMS Yeast Research',
      year: '2023',
      pdfUrl: '/papers/novel-fermentation-pathways-temperate-forest-yeasts.pdf',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'Discovery and characterization of novel metabolic pathways in yeasts from temperate forest environments.'
    },
    {
      id: 6,
      title: 'Craft Beer Innovation Using Patagonian Yeast Strains',
      authors: 'Vargas, N., Espinoza, S., González, M.',
      journal: 'Food Microbiology',
      year: '2022',
      pdfUrl: '/papers/craft-beer-innovation-patagonian-yeasts.pdf',
      thumbnail: 'https://images.pexels.com/photos/159832/beer-machine-alcohol-brewery-159832.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'Innovative approaches to craft beer production using native Patagonian yeast strains with unique flavor profiles.'
    },
    {
      id: 7,
      title: 'Phylogenetic Analysis of Nothofagus-Associated Microorganisms',
      authors: 'Mendoza, C., Silva, A., Fernández, R.',
      journal: 'Molecular Phylogenetics and Evolution',
      year: '2022',
      pdfUrl: '/papers/phylogenetic-analysis-nothofagus-microorganisms.pdf',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'Comprehensive phylogenetic study of microorganisms associated with Nothofagus trees in South American temperate forests.'
    },
    {
      id: 8,
      title: 'Sustainable Biotechnology from Patagonian Natural Resources',
      authors: 'González, M., López, P., Morales, S.',
      journal: 'Biotechnology for Biofuels',
      year: '2022',
      pdfUrl: '/papers/sustainable-biotechnology-patagonian-resources.pdf',
      thumbnail: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400',
      abstract: 'Exploring sustainable biotechnological applications derived from Patagonian natural resources and native microorganisms.'
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
            <BookOpen size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
            {t('publications.page.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('publications.page.subtitle')}
          </p>
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

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => window.open(publication.pdfUrl, '_blank')}
            >
              {/* PDF Thumbnail */}
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                <img
                  src={publication.thumbnail}
                  alt={publication.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-lg shadow-lg">
                    <FileText size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium bg-black/30 px-2 py-1 rounded">
                      PDF
                    </span>
                    <div className="flex items-center space-x-1">
                      <Download size={16} />
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    {publication.year}
                  </span>
                  <span className="text-gray-400">{publication.journal}</span>
                </div>
                
                <h2 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                  {publication.title}
                </h2>
                
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  {publication.authors}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {publication.abstract}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
                    <FileText size={16} />
                    <span>{t('publications.page.viewPDF')}</span>
                  </button>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={16} className="text-gray-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about PDFs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText size={24} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {t('publications.page.note.title')}
            </h3>
            <p className="text-blue-700 text-sm">
              {t('publications.page.note.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;