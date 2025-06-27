import { TPost } from '@/types'
import Post from './post'
import { useMediaQuery } from '@react-hook/media-query'

const RecentBlogs = ({ posts }: { posts: TPost[] }) => {
  const isSmallScreen = useMediaQuery('only screen and (max-width: 768px)')
  const isMediumScreen = useMediaQuery('only screen and (max-width: 1024px)')
  return (
    <div className="flex w-full flex-col gap-5">
      <p className="font-semibold">Recent blog posts</p>
      <div className="grid grid-rows-1 gap-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div>
            <Post post={posts[0]} />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <Post
              post={posts[1]}
              textWidth={isSmallScreen ? 'w-full' : 'w-1/2'}
              style="flex-row"
              screen={isSmallScreen}
            />
            <Post
              post={posts[2]}
              textWidth={isSmallScreen ? 'w-full' : 'w-1/2'}
              style="flex-row"
              screen={isSmallScreen}
            />
          </div>
        </div>
        <div>
          <Post post={posts[3]} style="flex-row" screen={isMediumScreen} />
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
