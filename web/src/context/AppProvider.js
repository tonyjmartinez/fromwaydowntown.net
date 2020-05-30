import React from 'react'

import useDarkMode from 'src/hooks/useDarkMode'

import { AppContext } from './AppContext'

const AppProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
