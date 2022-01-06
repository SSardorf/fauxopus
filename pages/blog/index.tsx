import type { NextPage } from "next";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/navbar";
import Head from "next/head";

const blog = (props: { posts: any[] }) => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <div className="pt-16 dark:text-white dark:bg-slate-700">
                {props.posts.map((post, index) => (
                    <div className="dark:text-white" key={index}>
                        <h1>{post.data.title}</h1>
                        <img src={post.data.image} />
                        <p className="prose dark:prose-invert">{post.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });
    return { props: { posts } };
};

export default blog;
