import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
function Home({ todo }) {
  // const [todo, setTodo] = useState([]);
  const router = useRouter();

  const handleClick = () => {
    router.push('/product');
  }

  // useEffect(() => {
  //   const getTodoListing = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await response.json();
  //     setTodo(data);
  //   }
  //   getTodoListing();
  // }, [])
  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <div>Home Page</div>
      {todo.length > 0 && todo.map((info, index) => (
        <div key={index}>
          {info.id}:{info.title}:{info.completed}:
        </div>
      ))}
      <button  className="btn btn-primary" onClick={handleClick}>Place Order</button>
      <button  className="btn btn-success" onClick={() => {
        router.push('/posts')
      }}>Go To Posts</button>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      todo: data
    }
  }
}