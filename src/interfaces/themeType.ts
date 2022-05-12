import { Theme } from '../styles/theme';

export interface themeInterface {
  theme: Theme;
}

export interface themeFunType {
  theme: Theme;
  toggleTheme: () => void;
}
