-- Обновляем основное изображение продукта
UPDATE products 
SET image = '/placeholder.svg?height=600&width=600'
WHERE image IS NULL OR image LIKE 'https://example.com/%';

-- Обновляем массив изображений
UPDATE products 
SET images = ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600']
WHERE images IS NULL OR array_length(images, 1) = 0; 