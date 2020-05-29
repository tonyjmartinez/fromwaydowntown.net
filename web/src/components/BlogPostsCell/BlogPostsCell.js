import { Link, routes } from '@redwoodjs/router'
import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => <BlogPost key={post.id} post={post} />)
}
