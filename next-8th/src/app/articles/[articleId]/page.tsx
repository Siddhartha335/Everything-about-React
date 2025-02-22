"use client"

import Link from "next/link"
import React from "react"
import { use } from "react"

type NewsProps = {
    params:Promise<{articleId:string}>,
    searchParams: Promise<{lang?:'en' | 'np' | 'jp'}>

}
const News = ({params,searchParams}:NewsProps) => {

    const {articleId} = use(params);
    const {lang} = use(searchParams);

  return (
    <div>
        <h2>News article {articleId}</h2>
        {lang && <p>Language: {lang}</p>}

        <div className="flex flex-col font-bold underline">
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=np`}>Nepalese</Link>
            <Link href={`/articles/${articleId}?lang=jp`}>Japanese</Link>
        </div>
    </div>
  )
}

export default News