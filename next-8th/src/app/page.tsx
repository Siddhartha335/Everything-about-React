import * as React from "react";
import Link from "next/link"

const Home = () => {
  return (
    <div className="my-4">
      <h2 className="mb-2">Home page</h2>
      <Link href="/blog" className="w-2 bg-pink-500 p-2 underline">Go to blog</Link>  <br />
      <Link href="/articles/breaking-news-123?lang=en" className="font-semibold underline">Read in English </Link> <br />
      <Link href="/articles/breaking-news-123?lang=np" className="font-semibold underline">Read in Nepali</Link>
    </div>
  )
}

export default Home