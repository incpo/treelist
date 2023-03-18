import Head from 'next/head'
import TreeList from "@/components/TreeList";


export default function Home() {
    const items = ['Hello my name is John', 'KBLkyugblk', 'Test Value']

  return (
    <>
      <Head>
        <title>Tree List</title>
        <meta name="description" content="TreeList - FinLoik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center p-10 flex-col text-center'>
        <div>
            <h1 className='text-3xl'>Tree List</h1>
            <h2 className='text-purple-500 text-sm'>Framer-Motion</h2>
        </div>
          <div>
              <TreeList items={items}/>
          </div>
      </main>
    </>
  )
}
