import { createContext } from 'react';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Router from './Router';
import { useDarkMode } from './hooks/useDarkMode';
import { themeFunType } from './interfaces/themeType';
import SideBar from './components/common/SideBar';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
      <SideBar />
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;

export const ThemeContext = createContext<themeFunType>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});
