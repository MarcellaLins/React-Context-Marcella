import { ContactsList } from './ContactsList';
import { ThemeSwitcher } from './ThemeSwitcher';

export const ContactsSection = ({ contacts, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ThemeSwitcher />                 {/* botão de alternar tema */}
      <ContactsList contacts={contacts} />
    </div>
  );
};