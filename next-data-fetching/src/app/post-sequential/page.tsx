import React, { Suspense } from 'react'
import Author from './author';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Sequential = async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:Post[] = await response.json();
    const tenPosts:Post[] = posts.filter((post:Post):boolean => post.id %10 ===1);

  return (
    <>  
        <h1 className='text-2xl font-bold p-4 text-center m-4'>Blog Posts</h1>
        <div className='grid grid-cols-2 gap-4 p-4'>
        {tenPosts.map((post)=> (
            <div className='bg-white text-black p-2 m-2 rounded-2xl' key={post.id}>
                <h1 className='text-xl font-bold'>{post.title}</h1>
                <p className='font-light'>{post.body} </p>
                <Suspense fallback={<h1>Loading author...</h1>}>
                    <Author userId={post.userId} />
                </Suspense>
            </div>
        ))}
    </div>
    </>
  )
}

export default Sequential