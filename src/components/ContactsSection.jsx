import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ContactsList } from './ContactsList';
import { ThemeSwitcher } from './ThemeSwitcher';

export const ContactsSection = ({ contacts, name }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`section theme-${theme}`}>
      <h2>{name}</h2>
      <ThemeSwitcher />
      <ContactsList contacts={contacts} />
    </div>
  );
};