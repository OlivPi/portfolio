import React, { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {

  if (typeof window !== undefined && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
  if (typeof storedPrefs === String) 
    return storedPrefs;
  }

  const userMedia = window.matchMedia(('(prefers-color-scheme: dark)').matches);
  if (userMedia){
    return 'light';  
  }

  return 'dark'

}


export const ThemeContext = createContext();

console.log(ThemeContext);

export const ThemeProvider = ({ initialTheme, children }) => {

  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = () => {

    const root = window.document.documentElement;
    const lightTheme = "light"
    const darkTheme = "dark"
    if (localStorage) {
    localStorage.getItem("theme")
    }
    if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
    } else {
    root.classList.add(lightTheme)
    }
    
  }



  if(initialTheme){
    rawSetTheme(initialTheme);
  }

  useEffect(()=>{
    rawSetTheme(theme)
  },[theme])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
