import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import BottomNav from 'src/components/BottomNav'

import withAppContext from 'src/context/withAppContext'

const BlogLayout = ({ children, context }) => {
  const { isDarkMode, setIsDarkMode } = context
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  console.log('isDarkMode', isDarkMode)
  return (
    <div className={isDarkMode ? 'mode-dark' : null}>
      <header>
        <Link to={routes.home()}>
          <h1>From Way Downtown</h1>
        </Link>

        <nav>
          <ul>
            <li>Something</li>
            <li>
              <Link to={routes.newPost()}>New Post</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
            <li>
              <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
            <li>{isDarkMode ? 'DARK' : 'LIGHT'}</li>

            <li>
              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                DARK TOGGLE
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <BottomNav />
    </div>
  )
}

export default withAppContext(BlogLayout)
