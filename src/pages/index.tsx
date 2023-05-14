import Head from 'next/head'
import Layout from '@components/layout'
import Catalog from '@components/Catalog'

export async function getStaticProps() {
    const response = await fetch("https://diplom-e-commerce-server.onrender.com/api/auth/catalog");

    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}

export default function Home({ products }: any) {
    return (
        <>
            <Head>
              <title>Магазин техники</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Catalog products={products.products} />
            </Layout>
        </>
    )
}
