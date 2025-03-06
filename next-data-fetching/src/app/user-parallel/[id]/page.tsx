import React from 'react'

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

type Params = {
    params: Promise<{id:number}>
}

async function getPosts(userId:number) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return await response.json();
}

async function getAlbums(userId:number) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return await response.json();
}

const Parallel = async({params}:Params) => {

    const {id} = await params;
    const postsData:Promise<Post[]> = getPosts(id);
    const albumsData:Promise<Album[]> = getAlbums(id);

    const [posts,albums] = await Promise.all([postsData,albumsData]);

  return (
    <div className='w-full flex p-2 mt-6'>
        <div className=' w-1/2 md:w-3/4'>
        <h1 className='text-2xl p-2 text-center font-bold'>Posts</h1>
        {posts.map((post)=> (
            <div className='bg-white text-black p-2 m-2 rounded-2xl' key={post.id}>
                <h1 className='text-xl font-bold'>{post.title}</h1>
                <p className='font-light'>{post.body} </p>
                <p>{post.userId}</p>
            </div>
        ))}
        </div>
        <div className=' w-1/2 md:w-1/4'>
        <h1 className='text-2xl p-2 text-center font-bold'>Albums</h1>
        {albums.map((album)=> (
            <div className='bg-white text-black p-2 m-2 rounded-2xl' key={album.id}>
                <h1 className='text-xl font-bold'>{album.title}</h1>
                <p>{album.userId}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Parallel