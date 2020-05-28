import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn } = useAuth()
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>Something</li>
            <li>
              <a href="#" onClick={logIn}>
                Log In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
