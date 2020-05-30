import PostsLayout from 'src/layouts/PostsLayout'
import PostsCell from 'src/components/PostsCell'
import BlogLayout from 'src/layouts/BlogLayout'

const PostsPage = () => {
  return (
    <BlogLayout>
      <PostsLayout>
        <PostsCell />
      </PostsLayout>
    </BlogLayout>
  )
}

export default PostsPage
