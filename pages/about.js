import Head from 'next/head'
import Link from 'next/link'

export default function about() {

    return (
        <div className="container">
            <Head>
                <title>About</title>
            </Head>
            <main>
                <Link href="/">Home</Link>
                <h1 className="title">About</h1>
            </main>
        </div>
    )
}
