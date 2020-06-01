import styled from 'styled-components'

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 35px;
  border-radius: 3px;
  border: solid 1px black;
  background-color: white;
  cursor: pointer;
  &::after {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 35px;
    text-align: center;
    content: 'L';
    color: white;
    display: block;
    width: 31px;
    height: 35px;
    /*     margin: 3px;
 */
    background: #242432;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 60px;
  height: 35px;

  &:checked + ${CheckBoxLabel} {
    background: white;
    &::after {
      content: 'D';
      display: block;
      width: 31px;
      height: 35px;
      margin-left: 30px;
      transition: 0.2s;
    }
  }
`
const Toggle = ({ value, toggleValue }) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          onChange={toggleValue}
          checked={value}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  )
}

export default Toggle
