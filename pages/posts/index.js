import { signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Posts({ posts }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // const securePage = async () => {
        //     const session = await getSession();
        //     console.log("Session Posts", session);
        //     if (!session) {
        //         signIn();
        //     } else {
        //         setLoading(false);
        //     }
        // }
        // securePage();
    }, []);

    // if (loading) {
    //     return <h1>Loading.....</h1>
    // }
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

export async function getServerSideProps(context){
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/posts',
                permanent: false
            }
        }
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}