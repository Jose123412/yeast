/*
  # Sistema de Publicaciones - Configuración Completa

  1. Nuevas Tablas
    - `publications`
      - `id` (uuid, primary key)
      - `title_es`, `title_en`, `title_fr`, `title_pt` (text)
      - `abstract_es`, `abstract_en`, `abstract_fr`, `abstract_pt` (text)
      - `year` (integer)
      - `authors` (text)
      - `journal` (text, opcional)
      - `doi` (text, opcional)
      - `pdf_url` (text)
      - `image_url` (text, opcional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `created_by` (uuid, referencia a auth.users)

  2. Seguridad
    - Habilitar RLS en tabla `publications`
    - Políticas para lectura pública
    - Políticas para escritura solo para usuarios autenticados específicos

  3. Storage
    - Bucket para PDFs
    - Bucket para imágenes
    - Políticas de acceso público para lectura
*/

-- Crear tabla de publicaciones
CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_es text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  title_fr text NOT NULL DEFAULT '',
  title_pt text NOT NULL DEFAULT '',
  abstract_es text NOT NULL DEFAULT '',
  abstract_en text NOT NULL DEFAULT '',
  abstract_fr text NOT NULL DEFAULT '',
  abstract_pt text NOT NULL DEFAULT '',
  year integer NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
  authors text NOT NULL DEFAULT '',
  journal text DEFAULT '',
  doi text DEFAULT '',
  pdf_url text NOT NULL DEFAULT '',
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) DEFAULT auth.uid()
);

-- Habilitar RLS
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública
CREATE POLICY "Publications are publicly readable"
  ON publications
  FOR SELECT
  TO public
  USING (true);

-- Política para inserción solo para usuarios autenticados específicos
CREATE POLICY "Only authorized users can insert publications"
  ON publications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

-- Política para actualización solo para usuarios autenticados específicos
CREATE POLICY "Only authorized users can update publications"
  ON publications
  FOR UPDATE
  TO authenticated
  USING (
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  )
  WITH CHECK (
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

-- Política para eliminación solo para usuarios autenticados específicos
CREATE POLICY "Only authorized users can delete publications"
  ON publications
  FOR DELETE
  TO authenticated
  USING (
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at
DROP TRIGGER IF EXISTS update_publications_updated_at ON publications;
CREATE TRIGGER update_publications_updated_at
  BEFORE UPDATE ON publications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Crear buckets de storage si no existen
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('publications-pdfs', 'publications-pdfs', true),
  ('publications-images', 'publications-images', true)
ON CONFLICT (id) DO NOTHING;

-- Políticas de storage para PDFs
CREATE POLICY "Public can view PDFs"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'publications-pdfs');

CREATE POLICY "Authenticated users can upload PDFs"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'publications-pdfs' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

CREATE POLICY "Authenticated users can update PDFs"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'publications-pdfs' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

CREATE POLICY "Authenticated users can delete PDFs"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'publications-pdfs' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

-- Políticas de storage para imágenes
CREATE POLICY "Public can view images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'publications-images');

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'publications-images' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

CREATE POLICY "Authenticated users can update images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'publications-images' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

CREATE POLICY "Authenticated users can delete images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'publications-images' AND
    auth.jwt() ->> 'email' = 'admin@moleculargeneticslab.cl'
  );

-- Insertar algunas publicaciones de ejemplo
INSERT INTO publications (
  title_es, title_en, title_fr, title_pt,
  abstract_es, abstract_en, abstract_fr, abstract_pt,
  year, authors, journal, doi, pdf_url, image_url
) VALUES 
(
  'Dinámica de co-cultivo entre Lachancea cidri y Saccharomyces cerevisiae impacta el perfil aromático fermentativo',
  'Co-culture dynamics between Lachancea cidri and Saccharomyces cerevisiae impact fermentative aroma profile',
  'Dynamique de co-culture entre Lachancea cidri et Saccharomyces cerevisiae impacte le profil aromatique fermentatif',
  'Dinâmica de co-cultura entre Lachancea cidri e Saccharomyces cerevisiae impacta o perfil aromático fermentativo',
  'Este estudio presenta el primer análisis genómico integral de poblaciones de levaduras nativas que habitan la corteza de árboles Nothofagus en la Patagonia chilena.',
  'This study presents the first comprehensive genomic analysis of native yeast populations inhabiting the bark of Nothofagus trees in Chilean Patagonia.',
  'Cette étude présente la première analyse génomique complète des populations de levures indigènes habitant l''écorce des arbres Nothofagus en Patagonie chilienne.',
  'Este estudo apresenta a primeira análise genômica abrangente de populações de leveduras nativas que habitam a casca de árvores Nothofagus na Patagônia chilena.',
  2025,
  'Zavaleta, M., González, P., Silva, A.',
  'Applied Microbiology and Biotechnology',
  '10.1007/s00253-025-12345-6',
  '/papers/Zavaleta-et-al.-2025.pdf',
  'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
),
(
  'Monitoreo in vivo de la actividad transcripcional durante la transición metabólica usando un reportero bioluminiscente en levadura',
  'In Vivo Monitoring of Transcriptional Activity During Metabolic Transition Using a Bioluminescent Reporter in Yeast',
  'Suivi in vivo de l''activité transcriptionnelle pendant la transition métabolique à l''aide d''un rapporteur bioluminescent chez la levure',
  'Monitoramento in vivo da atividade transcricional durante a transição metabólica usando um repórter bioluminescente em levedura',
  'Desarrollamos cepas de levadura híbridas novedosas a partir de aislamientos patagónicos que mejoran significativamente el perfil aromático y la eficiencia de fermentación.',
  'We developed novel hybrid yeast strains from Patagonian isolates that significantly enhance the aromatic profile and fermentation efficiency.',
  'Nous avons développé de nouvelles souches de levure hybrides à partir d''isolats patagoniens qui améliorent significativement le profil aromatique.',
  'Desenvolvemos novas cepas de levedura híbridas a partir de isolados patagônicos que melhoram significativamente o perfil aromático.',
  2025,
  'Muñoz, L., Fernández, R., Martínez, C.',
  'FEMS Yeast Research',
  '10.1093/femsyr/foab025',
  '/papers/Munoz-et-al.-2025.pdf',
  'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
),
(
  'La evolución experimental y la hibridación mejoran la capacidad fermentativa de cepas silvestres de Saccharomyces eubayanus',
  'Experimental evolution and hybridization enhance the fermentative capacity of wild Saccharomyces eubayanus strains',
  'L''évolution expérimentale et l''hybridation améliorent la capacité fermentative des souches sauvages de Saccharomyces eubayanus',
  'Evolução experimental e hibridização aumentam a capacidade fermentativa de cepas selvagens de Saccharomyces eubayanus',
  'A través de evolución dirigida, creamos cepas de levadura especializadas adaptadas a condiciones de fermentación a baja temperatura.',
  'Through directed evolution, we created specialized yeast strains adapted to low-temperature fermentation conditions.',
  'Grâce à l''évolution dirigée, nous avons créé des souches de levure spécialisées adaptées aux conditions de fermentation à basse température.',
  'Através de evolução dirigida, criamos cepas de levedura especializadas adaptadas a condições de fermentação em baixa temperatura.',
  2025,
  'Vega, S., Ramírez, D., López, P.',
  'Nature Microbiology',
  '10.1038/s41564-025-01234-5',
  '/papers/Vega-et-al.-2025.pdf',
  'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
),
(
  'Alta abundancia relativa de ectomicorrizas durante el invierno en la línea arbórea',
  'High ectomycorrhizal relative abundance during winter at the treeline',
  'Haute abondance relative d''ectomycorhizes pendant l''hiver à la limite des arbres',
  'Alta abundância relativa de ectomicorrizas durante o inverno na linha de árvores',
  'Caracterización metabólica integral reveló vías enzimáticas únicas en levaduras de corteza de Nothofagus.',
  'Comprehensive metabolic profiling revealed unique enzymatic pathways in Nothofagus bark yeasts.',
  'Le profilage métabolique complet a révélé des voies enzymatiques uniques chez les levures d''écorce de Nothofagus.',
  'Perfil metabólico abrangente revelou vias enzimáticas únicas em leveduras de casca de Nothofagus.',
  2025,
  'Saona, N., Torres, A., Herrera, V.',
  'Mycorrhiza',
  '10.1007/s00572-025-01234-5',
  '/papers/Saona-et-al-2025.pdf',
  'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
);