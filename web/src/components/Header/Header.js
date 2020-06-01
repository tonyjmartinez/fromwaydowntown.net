import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'
import Toggle from 'src/components/Toggle'
import { useAuth } from '@redwoodjs/auth'

import withAppContext from 'src/context/withAppContext'

const StickyHeader = styled.div`
  padding: 10px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 16px;
  text-align: right;
`

const StyledHeader = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5em;
  margin: 0px auto;
`

const HeaderDiv = styled.div`
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
`

const Header = ({ context }) => {
  console.log('context', context)
  const { isDarkMode, setIsDarkMode } = context

  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <div>
      <StickyHeader>
        <HeaderDiv style={{ float: 'left' }}>
          <Link to={routes.home()}>
            <StyledHeader>From Way Downtown</StyledHeader>
          </Link>
        </HeaderDiv>
        <HeaderDiv right>
          <button
            onClick={isAuthenticated ? logOut : logIn}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
          {/* {isAuthenticated && <li>{currentUser.email}</li>} */}
        </HeaderDiv>
        <HeaderDiv right>
          <Toggle
            value={isDarkMode}
            toggleValue={() => setIsDarkMode(!isDarkMode)}
          />
        </HeaderDiv>
      </StickyHeader>
    </div>
  )
}

export default withAppContext(Header)
