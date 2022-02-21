import React, { createContext } from 'react';
// import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import Router from './Router';
import { useDarkMode } from './hooks/useDarkMode';

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// ThemeContext 객체 생성
export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,		// 테마(라이트, 다크)
  toggleTheme: () => {		// 테마 변경하는 함수
    return null;
  },
});

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
    <Router/>
    </ThemeContext.Provider>
  );
}

export default App;
