import type { Product } from './types';

// Unique brands and categories for filters
export const brands = [
  'TechPro',
  'HomeStyle',
  'SportMax',
  'FashionTrend',
  'GourmetChef',
];

export const categories = [
  'Electrónica',
  'Hogar',
  'Deportes',
  'Moda',
  'Cocina',
];

// Generate 50 products
export const products: Product[] = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const categoryIndex = i % 5;
  const brandIndex = i % 5;

  const category = categories[categoryIndex];
  const brand = brands[brandIndex];

  // Generate product details based on category
  let name = '';
  let description = '';
  let price = 0;

  switch (category) {
    case 'Electrónica':
      name = `${brand} ${
        ['Smartphone', 'Tablet', 'Laptop', 'Auriculares', 'Smartwatch'][i % 5]
      } Pro ${id}`;
      description = `Dispositivo de última generación con las mejores características y rendimiento excepcional. Ideal para trabajo y entretenimiento.`;
      price = 299.99 + i * 10;
      break;
    case 'Hogar':
      name = `${brand} ${
        ['Lámpara', 'Sofá', 'Mesa', 'Estantería', 'Alfombra'][i % 5]
      } Deluxe`;
      description = `Producto de alta calidad para decorar tu hogar con estilo y elegancia. Materiales duraderos y diseño moderno.`;
      price = 89.99 + i * 5;
      break;
    case 'Deportes':
      name = `${brand} ${
        ['Zapatillas', 'Balón', 'Raqueta', 'Mochila', 'Bicicleta'][i % 5]
      } Performance`;
      description = `Equipamiento deportivo de alto rendimiento diseñado para atletas exigentes. Comodidad y durabilidad garantizadas.`;
      price = 59.99 + i * 3;
      break;
    case 'Moda':
      name = `${brand} ${
        ['Camiseta', 'Pantalón', 'Chaqueta', 'Vestido', 'Zapatos'][i % 5]
      } Collection`;
      description = `Prenda de moda con diseño exclusivo y materiales de primera calidad. Perfecta para cualquier ocasión.`;
      price = 39.99 + i * 2;
      break;
    case 'Cocina':
      name = `${brand} ${
        ['Sartén', 'Olla', 'Cuchillo', 'Batidora', 'Cafetera'][i % 5]
      } Chef`;
      description = `Utensilio de cocina profesional para preparar tus recetas favoritas. Fácil de usar y limpiar.`;
      price = 49.99 + i * 4;
      break;
  }

  return {
    id,
    name,
    description,
    price,
    image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(
      name
    )}`,
    category,
    brand,
  };
});
