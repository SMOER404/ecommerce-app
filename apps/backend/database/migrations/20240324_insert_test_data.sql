-- Добавляем тестовую категорию
INSERT INTO categories (id, name, description, image, is_active)
VALUES (
  gen_random_uuid(),
  'Кроссовки',
  'Спортивная обувь для активного образа жизни',
  'https://example.com/sneakers.jpg',
  true
);

-- Добавляем тестовый бренд
INSERT INTO brands (id, name, description, image, is_active)
VALUES (
  gen_random_uuid(),
  'Nike',
  'Американский производитель спортивной одежды и обуви',
  'https://example.com/nike.jpg',
  true
);

-- Получаем ID категории и бренда
DO $$
DECLARE
  category_id UUID;
  brand_id UUID;
  product_id UUID;
BEGIN
  SELECT id INTO category_id FROM categories WHERE name = 'Кроссовки' LIMIT 1;
  SELECT id INTO brand_id FROM brands WHERE name = 'Nike' LIMIT 1;

  -- Добавляем тестовый продукт
  INSERT INTO products (id, name, description, price, stock, image, images, category_id, brand_id, is_active)
  VALUES (
    gen_random_uuid(),
    'Nike Air Max',
    'Легендарные кроссовки с амортизацией Air',
    12999.99,
    10,
    'https://example.com/air-max.jpg',
    ARRAY['https://example.com/air-max-1.jpg', 'https://example.com/air-max-2.jpg'],
    category_id,
    brand_id,
    true
  ) RETURNING id INTO product_id;

  -- Добавляем варианты продукта
  INSERT INTO product_variants (id, product_id, color, size, price, stock)
  VALUES
    (gen_random_uuid(), product_id, 'Черный', '40', 12999.99, 3),
    (gen_random_uuid(), product_id, 'Черный', '41', 12999.99, 4),
    (gen_random_uuid(), product_id, 'Белый', '40', 12999.99, 2),
    (gen_random_uuid(), product_id, 'Белый', '41', 12999.99, 1);
END $$; 