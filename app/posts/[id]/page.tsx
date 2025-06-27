'use client'

import Post from '@/components/post'
import { TPost } from '@/types'
import { Spinner } from '@heroui/react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState<TPost | null>(null)
  const [loading, setLoading] = useState(true)
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
      console.log(error)
    }
  }
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Spinner variant="spinner" />
        </div>
      ) : (
        <div>
          <p>{post?.title}</p>
          <p>{post?.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostDetails
