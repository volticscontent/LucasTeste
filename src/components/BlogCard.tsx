import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/sanityImage';
import type { Post } from '../types/post';

interface BlogCardProps {
  post: Post & { coverImage?: any; };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {post.coverImage && (
        <div className="relative w-full h-48">
          <Image
            src={urlFor(post.coverImage).width(800).height(400).url()}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
        <span className="text-sm text-neutral-500 mb-4">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
        <Link href={`/blog/${post.slug?.current || post.slug}`} className="mt-auto text-blue-600 hover:underline font-medium" tabIndex={0} aria-label={`Ler mais sobre ${post.title}`}>
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; 