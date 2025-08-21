import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, ArrowLeft, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. María González',
      position: 'Director de Laboratorio',
      education: 'PhD en Genética Molecular',
      email: 'maria.gonzalez@lab.cl',
      phone: '+56 9 1234 5678',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Genómica de Levaduras'
    },
    {
      id: 2,
      name: 'Dr. Carlos Mendoza',
      position: 'Investigador Senior',
      education: 'PhD en Biotecnología',
      email: 'carlos.mendoza@lab.cl',
      phone: '+56 9 2345 6789',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Evolución Experimental'
    },
    {
      id: 3,
      name: 'Dr. Ana Silva',
      position: 'Investigadora Senior',
      education: 'PhD en Microbiología',
      email: 'ana.silva@lab.cl',
      phone: '+56 9 3456 7890',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Ecología Microbiana'
    },
    {
      id: 4,
      name: 'Dr. Roberto Fernández',
      position: 'Investigador Asociado',
      education: 'PhD en Biología Molecular',
      email: 'roberto.fernandez@lab.cl',
      phone: '+56 9 4567 8901',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Fermentación Industrial'
    },
    {
      id: 5,
      name: 'Dr. Laura Martínez',
      position: 'Investigadora Asociada',
      education: 'PhD en Bioquímica',
      email: 'laura.martinez@lab.cl',
      phone: '+56 9 5678 9012',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Metabolismo de Levaduras'
    },
    {
      id: 6,
      name: 'Dr. Diego Ramírez',
      position: 'Investigador Postdoctoral',
      education: 'PhD en Genética',
      email: 'diego.ramirez@lab.cl',
      phone: '+56 9 6789 0123',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Análisis Genómico'
    },
    {
      id: 7,
      name: 'Dra. Patricia López',
      position: 'Investigadora Postdoctoral',
      education: 'PhD en Biotecnología Ambiental',
      email: 'patricia.lopez@lab.cl',
      phone: '+56 9 7890 1234',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Biodiversidad Microbiana'
    },
    {
      id: 8,
      name: 'MSc. Andrés Torres',
      position: 'Técnico de Laboratorio Senior',
      education: 'Magíster en Biotecnología',
      email: 'andres.torres@lab.cl',
      phone: '+56 9 8901 2345',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Cultivo de Microorganismos'
    },
    {
      id: 9,
      name: 'MSc. Valentina Herrera',
      position: 'Técnica de Laboratorio Senior',
      education: 'Magíster en Microbiología',
      email: 'valentina.herrera@lab.cl',
      phone: '+56 9 9012 3456',
      image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Análisis Molecular'
    },
    {
      id: 10,
      name: 'Ing. Sebastián Morales',
      position: 'Especialista en Bioinformática',
      education: 'Ingeniería en Biotecnología',
      email: 'sebastian.morales@lab.cl',
      phone: '+56 9 0123 4567',
      image: 'https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Análisis de Datos Genómicos'
    },
    {
      id: 11,
      name: 'MSc. Camila Vega',
      position: 'Coordinadora de Proyectos',
      education: 'Magíster en Gestión de Proyectos',
      email: 'camila.vega@lab.cl',
      phone: '+56 9 1234 5670',
      image: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Gestión de Investigación'
    },
    {
      id: 12,
      name: 'Lic. Joaquín Castro',
      position: 'Técnico de Laboratorio',
      education: 'Licenciatura en Biología',
      email: 'joaquin.castro@lab.cl',
      phone: '+56 9 2345 6781',
      image: 'https://images.pexels.com/photos/2182976/pexels-photo-2182976.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Preparación de Muestras'
    },
    {
      id: 13,
      name: 'Lic. Francisca Rojas',
      position: 'Técnica de Laboratorio',
      education: 'Licenciatura en Biotecnología',
      email: 'francisca.rojas@lab.cl',
      phone: '+56 9 3456 7892',
      image: 'https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Control de Calidad'
    },
    {
      id: 14,
      name: 'Est. Matías Sánchez',
      position: 'Estudiante de Doctorado',
      education: 'Estudiante PhD Genética',
      email: 'matias.sanchez@lab.cl',
      phone: '+56 9 4567 8903',
      image: 'https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Hibridación de Levaduras'
    },
    {
      id: 15,
      name: 'Est. Isidora Muñoz',
      position: 'Estudiante de Doctorado',
      education: 'Estudiante PhD Biotecnología',
      email: 'isidora.munoz@lab.cl',
      phone: '+56 9 5678 9014',
      image: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Aplicaciones Industriales'
    },
    {
      id: 16,
      name: 'Est. Nicolás Vargas',
      position: 'Estudiante de Magíster',
      education: 'Estudiante MSc Microbiología',
      email: 'nicolas.vargas@lab.cl',
      phone: '+56 9 6789 0125',
      image: 'https://images.pexels.com/photos/2182978/pexels-photo-2182978.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Caracterización Fenotípica'
    },
    {
      id: 17,
      name: 'Est. Sofía Espinoza',
      position: 'Estudiante de Magíster',
      education: 'Estudiante MSc Biología Molecular',
      email: 'sofia.espinoza@lab.cl',
      phone: '+56 9 7890 1236',
      image: 'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Expresión Génica'
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
            <Users size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
            {t('team.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('team.subtitle')}
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="aspect-w-1 aspect-h-1 h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                    <span className="font-medium">{member.position}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>{member.education}</span>
                  </div>
                  
                  <div className="text-sm text-blue-600 font-medium">
                    {member.specialization}
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Phone size={14} className="flex-shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;