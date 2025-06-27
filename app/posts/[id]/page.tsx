'use client'

import Post from '@/components/post'
import { TPost } from '@/types'
import { Image, Spinner } from '@heroui/react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState<TPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetchPost()
  }, [])
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      setLoading(false)
      setPost(response.data)
    } catch (error) {
      setLoading(false)
      setError('Error fetching post')
    }
  }
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Spinner variant="spinner" />
        </div>
      ) : !error ? (
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <Image
              src="/image1.jpg"
              alt={post?.title}
              className="object-cover"
              width="100%"
              height="400px"
            />
          </div>
          <div>
            <p className="font-semibold">{post?.title}</p>
            <p>{post?.body}</p>
          </div>
        </div>
      ) : (
        <div className="flex font-bold text-xl justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  )
}

export default PostDetails
