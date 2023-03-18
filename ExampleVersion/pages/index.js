import Head from 'next/head'
import TreeList from "@/components/TreeList";
import Blog from "@/components/Blog";
import Blog2 from "@/components/Blog2";


export default function Home() {
    const items1 = [<Blog/>, <TreeList title='Nested Article' items={[<Blog2/>]}/>]
    const items2 = [<Blog2/>]

  return (
    <>
      <Head>
        <title>Tree List</title>
        <meta name="description" content="TreeList - FinLoik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center p-10 flex-col'>
        <div className='text-center mb-4'>
            <h1 className='text-3xl'>Tree List</h1>
            <h2 className='text-purple-500 text-sm'>Framer-Motion</h2>
        </div>
          <div className='flex mx-auto'>
              <div className='flex flex-col space-y-6'>
                  <TreeList title='Duo article' items={items1}/>
                  <TreeList title='Another Article' items={items2}/>
              </div>
          </div>
      </main>
    </>
  )
}
