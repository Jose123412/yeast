import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const sectionLinks = [
    { name: t('footer.sections.research'), href: '#research' },
    { name: t('footer.sections.team'), href: '#team' },
    { name: t('footer.sections.facilities'), href: '#facilities' },
  ];

  const legalLinks = [
    { name: t('footer.legal.privacy'), href: '/privacy' },
    { name: t('footer.legal.terms'), href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Microscope size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">moleculargeneticslab</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('description.subtitle')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-300">Quick Links</h4>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-300">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
                </div>
                <span className="text-gray-300 text-sm">{t('footer.contact.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                </div>
                <a
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm"
                >
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <Phone size={14} className="text-cyan-400 flex-shrink-0" />
                </div>
                <a
                  href={`tel:${t('footer.contact.phone')}`}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm"
                >
                  {t('footer.contact.phone')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 moleculargeneticslab.cl. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;