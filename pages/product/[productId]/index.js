import { useRouter } from 'next/router'

function ProductDetail({ products }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>{products.id} {products.title} {products.price}</h2>
            <p>{products.description}</p>
        </div>
    )
}

export default ProductDetail

export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    const paths = data.map((info) => {
        return {
            params: { productId: `${info.id}` }
        }
    })
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    console.log("context");
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate:30,
    }
}
