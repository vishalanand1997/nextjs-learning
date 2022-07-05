import { useRouter } from 'next/router';
import React from 'react'

function PostDetail({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <h1>Loading....</h1>
        )
    }
    return (
        <div>
            <h4>Post Detail</h4>
            <ul>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </div>
    )
}

export default PostDetail

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map((post) => {
        return {
            params: { postId: `${post.id}` }
        }
    })
    return {
        paths,
        fallback: true,
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();
    return {
        props: {
            post: data
        }
    }
}