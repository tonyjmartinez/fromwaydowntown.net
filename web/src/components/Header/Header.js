import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'
import Toggle from 'src/components/Toggle'

import withAppContext from 'src/context/withAppContext'

const StickyHeader = styled.div`
  padding: 10px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 16px;
`

const StyledHeader = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5em;
`

const HeaderDiv = styled.div`
  display: inline-block;
  float: ${(props) => (props.right ? 'right' : null)};
`

const Header = ({ context }) => {
  console.log('context', context)
  const { isDarkMode, setIsDarkMode } = context
  return (
    <div>
      <StickyHeader>
        <HeaderDiv>
          <Link to={routes.home()}>
            <StyledHeader>From Way Downtown</StyledHeader>
          </Link>
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
