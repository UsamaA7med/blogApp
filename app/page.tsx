'use client'
import Hero from '@/components/hero'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Spinner } from '@heroui/spinner'
import { TPost } from '@/types'
import AllPosts from '@/components/allPosts'
import RecentBlogs from '@/components/recentBlogs'
export default function Home() {
  const [posts, setPosts] = useState<TPost[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setPosts(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      {loading ? (
        <div className="flex justify-center">
          <Spinner variant="spinner" />
        </div>
      ) : (
        <>
          <RecentBlogs posts={posts} />
          <AllPosts posts={posts} />
        </>
      )}
    </div>
  )
}
