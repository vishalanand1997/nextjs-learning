import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Footer from "@/layout/Footer";

const Title = styled.h1`
 font-size:50px;
 `
//  color:${({ theme }) => theme.colors.primary}
function CSSJS() {
    return (
        <>
            <Head>
                <title>CSS In JS</title>
            </Head>
            <Image src="/royal.jpg" alt="Royal" placeholder="blur" blurDataURL="/royal.jpg" width={100} height={200} />
            <Title>Hello World</Title>
        </>
    )
}

export default CSSJS

CSSJS.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}