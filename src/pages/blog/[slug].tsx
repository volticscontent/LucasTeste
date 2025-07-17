import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../lib/sanity';
import { urlFor } from '../../lib/sanityImage';
import type { Post } from '../../types/post';
import Seo from '../../components/Seo';
import ButtonPrimary from '../../components/ButtonPrimary';
import { PortableText } from '@portabletext/react';

interface BlogPostProps {
  post: Post | null;
}

const BlogPost = ({ post }: BlogPostProps) => {
  if (!post) return <div className="text-center py-16">Post não encontrado.</div>;
  const getSlugString = (slug: any) => typeof slug === 'string' ? slug : slug?.current || '';
  const description = post.body && typeof post.body === 'string'
    ? post.body.replace(/<[^>]+>/g, '').slice(0, 160)
    : '';
  const url = `https://powerhousebrasil.com.br/blog/${getSlugString(post.slug)}`;
  return (
    <>
      <Seo
        title={post.title}
        description={description}
        image={post.mainImage ? urlFor(post.mainImage).width(800).height(400).url() : undefined}
        url={url}
      />
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-card p-4 md:p-10 mt-8 mb-16">
        {post.mainImage && (
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden mb-8">
            <Image
              src={urlFor(post.mainImage).width(1200).height(525).url()}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>
        )}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-2">
            <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : ''}</span>
            {post.author && <span className="pl-2 border-l border-neutral-200">{typeof post.author === 'object' ? post.author.name : post.author}</span>}
          </div>
        </header>
        <section className="prose prose-lg max-w-none mx-auto text-neutral-900 transition-all duration-300 px-0 md:px-0">
          <PortableText value={post.body} />
        </section>
        <div className="flex justify-center">
          <Link href="/blog" aria-label="Voltar para o Blog">
            <ButtonPrimary className="mt-12">← Voltar para o Blog</ButtonPrimary>
          </Link>
        </div>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post: Post) => ({
    params: { slug: typeof post.slug === 'object' ? post.slug.current : post.slug },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await getPostBySlug(slug);
  if (!post) return { notFound: true };
  return {
    props: { post },
    revalidate: 60,
  };
};

export default BlogPost; 