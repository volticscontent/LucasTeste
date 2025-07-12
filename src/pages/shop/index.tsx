import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import Seo from '../../components/Seo';
import SidebarFilter from '../../components/SidebarFilter';
import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';

const ShopIndex = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Seo title="Produtos - Power House Brasil" description="Vitrine de produtos para ciclismo urbano." />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-900">Produtos</h1>
        {selectedCategory && (
          <div className="mb-6">
            <ButtonPrimary onClick={() => setSelectedCategory(null)} className="text-base px-6 py-3 rounded-xl">
              Ver todos os produtos
            </ButtonPrimary>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar de categorias */}
          <SidebarFilter
            selectedCategory={selectedCategory}
            handleSelectCategory={setSelectedCategory}
          />
          {/* Listagem de produtos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-blue-900 font-semibold py-12">
                  Nenhum produto encontrado para esta categoria.
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    slug={product.slug}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopIndex; 