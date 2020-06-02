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
    <button
      onClick={toggleValue}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="fill-current w-4 h-4 mr-2"
      >
        <path
          className="heroicon-ui"
          d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z"
        />
      </svg>
      <span>{value ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default Toggle
