import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import Test from "../../components/test";
import button from "../../components/button";

interface MDXProps {
    source: MDXRemoteSerializeResult;
    meta : {
      [key: string]: any;
  }
}

const components = { Test, button };

export default function Post({meta, source }: MDXProps) { // Meta contains front matter (MDX metadata) might be good for SEO
    return (
        <div className="prose">
            <MDXRemote {...source} components={components} />
        </div>
    );
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<MDXProps, { slug: string }> =
    async ({ params }) => {
        if (!params?.slug) throw new Error("slug is missing");
        const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
        const source = fs.readFileSync(postFilePath);
        const { content, data } = matter(source);
        const mdxSource = await serialize(content);
        return { props: { source: mdxSource, meta: data } };
    };
