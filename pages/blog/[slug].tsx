import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

import Test from '../../components/test'

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

const components = { Test }

export default function Post({ source }) {
  console.log(source)
  return (
    <div>
      <MDXRemote {...source} components={components} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  console.log(mdxSource)
  return { props: { source: mdxSource, frontMatter: data } }
  }


