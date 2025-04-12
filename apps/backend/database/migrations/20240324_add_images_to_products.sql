ALTER TABLE products ADD COLUMN images TEXT[] DEFAULT '{}';

-- Копируем существующие изображения в новый массив
UPDATE products SET images = ARRAY[image] WHERE image IS NOT NULL; 