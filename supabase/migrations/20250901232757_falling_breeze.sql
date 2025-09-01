/*
  # Simplify publications schema

  1. Schema Changes
    - Remove multilingual title requirements (keep only title_en as main title)
    - Remove multilingual abstract requirements (keep only abstract_en as main abstract)
    - Maintain backward compatibility with existing data
  
  2. Security
    - Maintain existing RLS policies
    - Keep storage policies unchanged
*/

-- Add new simplified columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'publications' AND column_name = 'title'
  ) THEN
    ALTER TABLE publications ADD COLUMN title text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'publications' AND column_name = 'abstract'
  ) THEN
    ALTER TABLE publications ADD COLUMN abstract text DEFAULT '';
  END IF;
END $$;

-- Update existing data to use simplified fields
UPDATE publications 
SET 
  title = COALESCE(NULLIF(title_en, ''), NULLIF(title_es, ''), NULLIF(title_fr, ''), NULLIF(title_pt, ''), ''),
  abstract = COALESCE(NULLIF(abstract_en, ''), NULLIF(abstract_es, ''), NULLIF(abstract_fr, ''), NULLIF(abstract_pt, ''), '')
WHERE title = '' OR abstract = '';