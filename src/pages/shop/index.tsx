import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import Seo from '../../components/Seo';

const ShopIndex = () => {
  return (
    <>
      <Seo title="Produtos - Power House Brasil" description="Vitrine de produtos para ciclismo urbano." />
      <div>
        <h1 className="text-3xl font-bold mb-8">Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopIndex; 