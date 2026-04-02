import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeArea } from './context/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeArea initialTheme="light">
    <App />
  </ThemeArea>
);