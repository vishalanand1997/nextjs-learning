import Link from 'next/link';
import React from 'react'

function Posts({ posts }) {
    return (
        <div>
            <h2>Post Listing:-</h2>
            {posts.map((item, index) => (
                <Link href={`/posts/${item.id}`} passHref key={index}>
                    <ul>
                        <li>{item.title}</li>
                        <li>{item.body}</li>
                        <hr />
                    </ul>
                </Link>
            ))}
        </div>
    )
}

export default Posts

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}