import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  slug: string;
}

const ProductCard = ({ title, image, price, slug }: ProductCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="relative w-full h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
      <span className="text-xl font-bold text-blue-700 mb-4">R$ {price.toFixed(2)}</span>
      <Link href={`/shop/${slug}`} className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center font-medium" tabIndex={0} aria-label={`Ver produto ${title}`}>
        Ver Produto
      </Link>
    </div>
  </div>
);

export default ProductCard; 