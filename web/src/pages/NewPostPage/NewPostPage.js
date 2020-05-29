import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'
import NewPost from 'src/components/NewPost'

const NewPostPage = () => {
  return (
    <BlogLayout>
      <PostsLayout>
        <NewPost />
      </PostsLayout>
    </BlogLayout>
  )
}

export default NewPostPage
