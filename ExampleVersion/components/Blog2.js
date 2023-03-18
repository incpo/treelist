import React from 'react';
import Image from "next/image";
const Blog2 = () => {
    return (
        <article className='border p-2 rounded'>
            <h2 className='text-xl text-black font-medium'>Blog 02</h2>
            <div className='my-2'>
                <Image src='/prototype2.webp' width={300} height={300} style={{width: '100%', height: '100%'}} alt='blog 2' />
            </div>
            <p className='text-gray-400'>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            </p>
            <span className='text-sm text-zinc-700 underline'>18.03.2023</span>
        </article>
    );
};

export default Blog2;