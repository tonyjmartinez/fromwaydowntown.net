import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <header>
        <h1>From Way Downtown</h1>
        <nav>
          <ul>
            <li>Something</li>
            <li>
              <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
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
