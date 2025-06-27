import { TPost } from '@/types'
import { ArrowUpRight } from '@deemlol/next-icons'
import { Chip, Image } from '@heroui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Post = ({
  post,
  style,
  screen,
  textWidth,
}: {
  post: TPost
  style?: string
  textWidth?: string
  screen?: boolean
}) => {
  return (
    <motion.div
      className={`w-full flex ${screen ? 'flex-col' : style ? style : 'flex-col'} gap-5`}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <Image
        src={'/image1.jpg'}
        alt={post.title}
        className="object-cover"
        width={'100%'}
        height={'100%'}
      />
      <div
        className={`flex flex-col gap-2 ${textWidth ? textWidth : 'w-full'}`}
      >
        <p className="text-[#6941C6]">Alec Whitten . 1 Jan 2023 </p>
        <div className="flex items-center justify-between">
          <p className="font-semibold">{post.title.slice(0, 30) + '...'} </p>
          <Link href={`posts/${post.id}`}>
            <ArrowUpRight />
          </Link>
        </div>
        <p className="text-gray-500">{post.body.slice(0, 90) + '...'}</p>
        <div className="flex gap-2">
          <Chip color="secondary" variant="flat">
            LeaderShip
          </Chip>
          <Chip variant="flat">Management</Chip>
        </div>
      </div>
    </motion.div>
  )
}

export default Post
