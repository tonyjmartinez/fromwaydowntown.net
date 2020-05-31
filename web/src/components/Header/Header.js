import styled from 'styled-components'

const StickyHeader = styled.div`
  padding: 10px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 16px;
`

const StyledHeader = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 2em;
`

const Header = () => {
  return (
    <div>
      <StickyHeader>
        <StyledHeader>From Way Downtown</StyledHeader>
      </StickyHeader>
    </div>
  )
}

export default Header
