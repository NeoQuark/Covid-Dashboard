import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid | Overview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen">
        <h1 className="flex m-auto text-5xl font-bold">Covid Dashboard</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
