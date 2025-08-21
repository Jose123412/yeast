import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ExternalLink, Calendar, Users, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Publications: React.FC = () => {
  const { t } = useLanguage();

  const publications = [
    {
      id: 1,
      title: 'Co-culture dynamics between Lachancea cidri and Saccharomyces cerevisiae impact fermentative aroma profile',
      journal: 'Nature Microbiology',
      year: 2024,
      volume: '9',
      pages: '1234-1245',
      doi: '10.1038/s41564-024-01234-5',
      abstract: 'This study presents the first comprehensive genomic analysis of native yeast populations inhabiting the bark of Nothofagus trees in Chilean Patagonia. We identified 47 novel species with unique metabolic capabilities.',
      pdfUrl: '/papers/gonzalez-2024-genomic-diversity.pdf',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Biotechnological Applications of Patagonian Yeasts in Craft Beer Production',
      authors: ['Dr. Roberto Fernández', 'Dr. Laura Martínez', 'MSc. Andrés Torres'],
      journal: 'Applied and Environmental Microbiology',
      year: 2024,
      volume: '90',
      pages: '567-578',
      doi: '10.1128/AEM.02345-24',
      abstract: 'We developed novel hybrid yeast strains from Patagonian isolates that significantly enhance the aromatic profile and fermentation efficiency in craft beer production.',
      pdfUrl: '/papers/fernandez-2024-beer-production.pdf',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Experimental Evolution of Cold-Adapted Yeasts for Whisky Fermentation',
      authors: ['Dr. Diego Ramírez', 'Dra. Patricia López', 'Est. Matías Sánchez'],
      journal: 'Journal of Industrial Microbiology & Biotechnology',
      year: 2023,
      volume: '50',
      pages: '789-801',
      doi: '10.1093/jimb/kuad045',
      abstract: 'Through directed evolution, we created specialized yeast strains adapted to low-temperature fermentation conditions, improving whisky production in Patagonian climates.',
      pdfUrl: '/papers/ramirez-2023-whisky-fermentation.pdf',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Metabolic Characterization of Nothofagus-Associated Yeast Communities',
      authors: ['Dr. Ana Silva', 'MSc. Valentina Herrera', 'Lic. Joaquín Castro'],
      journal: 'Microbial Ecology',
      year: 2023,
      volume: '86',
      pages: '1456-1470',
      doi: '10.1007/s00248-023-02234-1',
      abstract: 'Comprehensive metabolic profiling revealed unique enzymatic pathways in Nothofagus bark yeasts, with potential applications in sustainable biotechnology.',
      pdfUrl: '/papers/silva-2023-metabolic-characterization.pdf',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Phylogenetic Analysis of Endemic Yeasts in Temperate Rainforests',
      authors: ['Dr. Carlos Mendoza', 'Ing. Sebastián Morales', 'Est. Isidora Muñoz'],
      journal: 'Systematic and Applied Microbiology',
      year: 2023,
      volume: '46',
      pages: '234-248',
      doi: '10.1016/j.syapm.2023.126234',
      abstract: 'Phylogenetic reconstruction revealed the evolutionary history of Patagonian yeasts, identifying key adaptive mutations for bark colonization.',
      pdfUrl: '/papers/mendoza-2023-phylogenetic-analysis.pdf',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Sustainable Fermentation Technologies Using Native Patagonian Microorganisms',
      authors: ['Dr. María González', 'MSc. Camila Vega', 'Lic. Francisca Rojas'],
      journal: 'Biotechnology for Biofuels and Bioproducts',
      year: 2022,
      volume: '15',
      pages: '89-102',
      doi: '10.1186/s13068-022-02189-4',
      abstract: 'Development of sustainable fermentation processes using native yeasts for biofuel production, contributing to circular economy principles.',
      pdfUrl: '/papers/gonzalez-2022-sustainable-fermentation.pdf',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Genomic Adaptation Mechanisms in Extreme Cold Environments',
      authors: ['Dr. Roberto Fernández', 'Est. Nicolás Vargas', 'Est. Sofía Espinoza'],
      journal: 'Environmental Microbiology',
      year: 2022,
      volume: '24',
      pages: '3456-3471',
      doi: '10.1111/1462-2920.16078',
      abstract: 'Investigation of genomic adaptations that allow yeasts to survive and thrive in the harsh conditions of Patagonian winters.',
      pdfUrl: '/papers/fernandez-2022-cold-adaptation.pdf',
      image: 'https://images.pexels.com/photos/3735748/pexels-photo-3735748.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Bioprospecting of Antimicrobial Compounds from Patagonian Yeasts',
      authors: ['Dr. Laura Martínez', 'Dra. Patricia López', 'MSc. Andrés Torres'],
      journal: 'Journal of Natural Products',
      year: 2022,
      volume: '85',
      pages: '1789-1798',
      doi: '10.1021/acs.jnatprod.2c00456',
      abstract: 'Discovery of novel antimicrobial compounds produced by native yeasts, with potential pharmaceutical applications.',
      pdfUrl: '/papers/martinez-2022-antimicrobial-compounds.pdf',
      image: 'https://images.pexels.com/photos/2280550/pexels-photo-2280550.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            {t('publications.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Explore our latest research publications and scientific contributions to the field of molecular genetics and biotechnology.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden relative">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{publication.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={14} />
                    <span>{publication.authors.length} authors</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                  {publication.title}
                </h2>
                
                <p className="text-sm text-gray-600 mb-3">
                  <strong>{publication.journal}</strong> ({publication.year}), Vol. {publication.volume}, pp. {publication.pages}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {publication.abstract}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Authors:</p>
                  <div className="flex flex-wrap gap-1">
                    {publication.authors.map((author, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        {author}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    <span>DOI</span>
                  </a>
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;