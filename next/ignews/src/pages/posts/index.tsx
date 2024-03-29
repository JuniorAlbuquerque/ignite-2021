import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import styles from './styles.module.scss'
import Link from 'next/link'

type Post = {
  slug: string 
  title: string 
  excerpt: string 
  updated_at: string
}

interface PostProps {
  posts: Post[]
}

export default function Posts({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>
      
      <main className={styles.container}>
        <div className={styles.posts}>
          {
            posts?.map(post => (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <a>
                  <time>{post.updated_at}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publications')
  ], {
    fetch: ['publications.title', 'publications.content'],
    pageSize: 100
  })

  const posts = response.results.map((post: any) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt: post.data.content.find(content => content.type === 'paragraph').text ?? '',
      updated_at: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })  

  return {
    props: {
      posts
    }
  }
}
