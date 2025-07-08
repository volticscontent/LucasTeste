import { GetStaticProps } from 'next';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/sanity';
import type { Post } from '../../types/post';
import Seo from '../../components/Seo';

interface BlogIndexProps {
  posts: (Post & { _id?: string })[];
}

const BlogIndex = ({ posts }: BlogIndexProps) => {
  const isFewPosts = posts.length < 3;
  return (
    <>
      <Seo title="Blog Power House Brasil - Notícias e Conteúdo para Ciclistas" description="Dicas, novidades e notícias para ciclistas urbanos e apaixonados por bike." />
      <div className={`max-w-6xl mx-auto py-12 px-4 ${isFewPosts ? 'flex flex-col items-center' : ''}`}>
        <h1 className="text-3xl font-bold mb-8 text-primary">Notícias e Dicas de Ciclismo</h1>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ${isFewPosts ? 'max-w-2xl mx-auto' : ''}`}
        >
          {posts.map((post) => (
            <div
              key={post.id || post._id}
              className="transition-transform duration-300 ease-in-out hover:scale-105 focus-within:scale-105"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
};

export default BlogIndex; 