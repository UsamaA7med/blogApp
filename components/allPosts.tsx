import { TPost } from '@/types'
import Post from './post'
import { motion } from 'framer-motion'

const AllPosts = ({ posts }: { posts: TPost[] }) => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex flex-col gap-5"
    >
      <p className="font-semibold">All blog posts</p>
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {posts.slice(0, 6).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  )
}

export default AllPosts
