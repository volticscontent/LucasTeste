import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'camiseta1',
    title: 'Camiseta Oficial',
    slug: 'camiseta-oficial',
    price: 129.9,
    image: '/img/products/camiseta.jpg',
    description: 'Camiseta confortável para ciclismo urbano.'
  },
  {
    id: 'bermuda1',
    title: 'Bermuda Esportiva',
    slug: 'bermuda-esportiva',
    price: 159.9,
    image: '/img/products/bermuda.jpg',
    description: 'Bermuda leve e resistente para pedaladas longas.'
  },
  {
    id: 'jaqueta1',
    title: 'Jaqueta Corta Vento',
    slug: 'jaqueta-corta-vento',
    price: 199.9,
    image: '/img/products/jaqueta.jpg',
    description: 'Jaqueta impermeável, ideal para dias chuvosos.'
  },
  {
    id: 'luva1',
    title: 'Luva de Ciclismo',
    slug: 'luva-ciclismo',
    price: 49.9,
    image: '/img/products/luva.jpg',
    description: 'Luva com proteção e conforto para as mãos.'
  },
  {
    id: 'garrafa1',
    title: 'Garrafa Térmica',
    slug: 'garrafa-termica',
    price: 39.9,
    image: '/img/products/garrafa.jpg',
    description: 'Garrafa térmica para manter sua bebida na temperatura ideal.'
  },
  {
    id: 'meia1',
    title: 'Meia Esportiva',
    slug: 'meia-esportiva',
    price: 19.9,
    image: '/img/products/meia.jpg',
    description: 'Meia confortável e respirável para ciclismo.'
  }
]; 