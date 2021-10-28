import React, { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {

  if (typeof window !== undefined && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
  if (typeof storedPrefs === String) 
    return storedPrefs;
  }

  const userMedia = window.matchMedia(('(prefers-color-scheme: dark)').matches);
  if (userMedia){
    return 'dark';  
  }

  return 'light'

}


export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {

  const [theme, setTheme] = useState(getInitialTheme)

  console.log(initialTheme);

  const rawSetTheme = (rawTheme) => {


    const root = document.documentElement;
    const isLight = rawTheme === 'light';


    console.log(root);
    console.log(isLight);
    console.log(rawTheme);

    root.classList.remove(isLight ? 'dark' : 'light');
    root.classList.add(rawTheme);


    localStorage.setItem('color-theme', rawTheme);

    console.log(localStorage);

    
  }



  if(initialTheme){
    rawSetTheme(initialTheme);
  }

  useEffect(()=>{
    rawSetTheme(theme)
    console.log(theme);
  },[theme])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
