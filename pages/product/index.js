import styles from "../../styles/Title.module.scss";

function ProductList({ products }) {
    return (
        <>
            <h1>List of products</h1>
            {products.map((info, index) => (
                <div key={index}>
                    <h2 className={styles.highlights}>{info.id} {info.title} {info.price}</h2>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();

    return {
        props: {
            products: data
        }
    }

}