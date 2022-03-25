import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function about() {

    return (
        <div className="container">
            <Head>
                <title>About | Uplers Blog</title>
                <meta name="title" content="About | Uplers Blog" />
                <meta name="description" content="Because Open Source plays a major part in how we build our products,
we see it as a matter of course to give the same effort back to our
community by creating valuable, free and easy-to-use software."/>

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="About | Uplers Blog" />
                <meta property="og:description" content="Because Open Source plays a major part in how we build our products,
we see it as a matter of course to give the same effort back to our
community by creating valuable, free and easy-to-use software."/>
                <meta property="og:image" content="./image/nextjs-logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="About | Uplers Blog" />
                <meta property="twitter:description" content="Because Open Source plays a major part in how we build our products,
we see it as a matter of course to give the same effort back to our
community by creating valuable, free and easy-to-use software."/>
                <meta property="twitter:image" content="./image/nextjs-logo.png" />
            </Head>
            <main>
                <Link href="/">Home</Link>
                <h1 className="title">About</h1>
                <img src="./image/nextjs-logo.png" alt="Next.js Logo" width={200} />
            </main>
        </div>
    )
}
