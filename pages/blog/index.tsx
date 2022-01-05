import type { NextPage } from "next";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/navbar";


const blog = (props: { posts: any[]; }) => {
    return (
        <>
        <Navbar />
            <h1 className="bg-red-400"> Hello! </h1>
            {props.posts.map((post, index) => (
                <div key={index}>
                    <h1>{post.data.title}</h1>
                    <p className="prose">{post.content}</p>
                </div>
            ))}
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
