import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { ThemeArea } from './context/ThemeContext';
import { ContactsSection } from './components/ContactsSection';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import './App.css';

const contacts1 = [
  { name: 'Finn the Human' },
  { name: 'Jake the Dog' }
];

const contacts2 = [
  { name: 'Marceline' },
  { name: 'Princess Bubblegum' }
];

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App theme-${theme}`}>

      {/* TOPO */}
      <div className="header">
        <h1>Contacts</h1>
        <ThemeSwitcher />
      </div>

      {/* SEÇÕES */}
      <div className="sections">
        <ThemeArea initialTheme="light">
          <ContactsSection contacts={contacts1} name="Family" />
        </ThemeArea>

        <ThemeArea initialTheme="dark">
          <ContactsSection contacts={contacts2} name="Friends" />
        </ThemeArea>
      </div>

    </div>
  );
}