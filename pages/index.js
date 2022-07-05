import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/product');
  }

  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <div>Home Page</div>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home
