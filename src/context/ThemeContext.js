import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeArea({ children, initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}