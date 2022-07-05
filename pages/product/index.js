import Link from 'next/link'
import React from 'react'

function ProductList({ productId = 100 }) {
    return (
        <ol>
            <Link href="/">
                <a>Home Page</a>
            </Link>
            <Link href={`/product/${productId}`}>
                <a>
                    <li>Product 1</li>
                </a>
            </Link>
            <Link href="/product/2">
                <a>
                    <li>Product 2</li>
                </a>
            </Link>
            <Link href="/product/3" replace>
                <a>
                    <li>Product 3</li>
                </a>
            </Link>
        </ol>
    )
}

export default ProductList