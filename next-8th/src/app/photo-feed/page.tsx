"use client"

import React,{useEffect, useState} from 'react'
import Link from 'next/link'

const Photofeed  = () => {

    const [photos, setPhotos] = useState([])

    useEffect(()=> {
        const getPhotos = async() => {
            const response = await fetch('https://picsum.photos/v2/list?limit=10');
            const data = await response.json();
            setPhotos(data)
        }
        getPhotos()
    },[])

  return (
    <>
        <h1 className='text-center font-bold text-2xl my-8'>Photo feeds</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {photos.map((photo: any) => (
            <Link href={`/photo-feed/${photo.id}`} key={photo.id}>
                    <div key={photo.id} >
            <img 
                src={photo.download_url} 
                alt={photo.author} 
                className="object-cover w-full h-96 rounded-lg" 
            />
            </div>
            </Link>
        ))}
        </div>
    </>

  )
}

export default Photofeed 