"use client"
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import Link from 'next/link'

type Props = {
    params:Promise<{id:number}>
}

const page = ({params}:Props) => {

    const [photo,setPhoto] = useState<any>(null);
    const {id} = use(params);

    useEffect(()=> {

        const specificPhoto = async () => {
            const response = await fetch(`https://picsum.photos/id/${id}/info`);
            const data = await response.json();
            setPhoto(data);
        }

        specificPhoto();
    },[id])

  return (
    <div className='flex flex-col justify-center items-center my-10' >
        <div className='my-4'>
            <img src={photo?.download_url} alt={photo?.author} className='object-cover w-full h-96' />
        </div>
        <div>
            <p>Author: {photo?.author}</p>
            <h2><em><Link href={photo===null ? '' : photo?.download_url}>Download url: {photo?.download_url}</Link></em></h2>
        </div>
    </div>

  )
}

export default page