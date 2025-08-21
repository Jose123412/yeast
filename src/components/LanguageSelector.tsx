@@ .. @@
 import React, { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { ChevronDown, Globe } from 'lucide-react';
 import { useLanguage } from '../context/LanguageContext';
+import 'flag-icons/css/flag-icons.min.css';

 const languages = [
-  { code: 'es', name: 'Español', flag: '🇪🇸' },
-  { code: 'en', name: 'English', flag: '🇺🇸' },
-  { code: 'fr', name: 'Français', flag: '🇫🇷' },
-  { code: 'pt', name: 'Português', flag: '🇧🇷' },
+  { code: 'es', name: 'Español', flagCode: 'es' },
+  { code: 'en', name: 'English', flagCode: 'us' },
+  { code: 'fr', name: 'Français', flagCode: 'fr' },
+  { code: 'pt', name: 'Português', flagCode: 'br' },
 ];

 const LanguageSelector: React.FC = () => {
@@ .. @@
         >
           <Globe size={16} className="text-gray-500" />
-          <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
+          <div className="flex items-center space-x-2">
+            <span className={`fi fi-${currentLang?.flagCode} w-5 h-5 rounded-full shadow-sm`}></span>
+            <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
+          </div>
           <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${s
}howLanguageDropdown ? 'rotate-180' : ''}`} />
         </button>

@@ .. @@
                   <div className="flex items-center space-x-3">
-                    <span className="text-lg">{lang.flag}</span>
+                    <span className={`fi fi-${lang.flagCode} w-6 h-6 rounded-full shadow-sm`}></span>
                     <span className="font-medium">{lang.name}</span>
                   </div>
                 </button>