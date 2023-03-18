import React from 'react';
import Image from "next/image";
const Blog = () => {
    return (
        <article className='border p-2 rounded'>
            <h2 className='text-xl text-black font-medium'>Blog 01</h2>
            <div className='my-2'>
                <Image src='/prototype.webp' width={300} height={300} style={{width: '100%', height: '100%'}} />
            </div>
            <p className='text-gray-400'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            <span className='text-sm text-zinc-700 underline'>18.03.2023</span>
        </article>
    );
};

export default Blog;