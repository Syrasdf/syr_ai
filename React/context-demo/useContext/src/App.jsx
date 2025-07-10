import { useState } from 'react'
import Page from './components/Page';
import { ThemeContext } from './ThemeContext';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log(ThemeContext,'////');
  return (
    <ThemeContext.Provider value={{theme,setTheme }}>
    <Page />
    <button onClick={() => setTheme('dark')}>切换主题</button>
    {/* <Uncle /> */}
      {/* <Parent>
        <Child>  <GrandChild>
            <GreatGrandChild>

            </GreatGrandChild>
          </GrandChild>
        </Child>
      </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App

        