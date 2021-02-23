import Head from 'next/head';
import { server } from '../config/index';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <>
      <Head>

        <meta name='keywords' constent='web development, programming' />
      </Head>
      {articles && <ArticleList articles={articles} />}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };