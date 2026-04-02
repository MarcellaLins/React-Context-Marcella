import { ContactsSection } from './components/ContactsSection';
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
  return (
    <div className="App">
      <h1>Contacts</h1>
      <ContactsSection contacts={contacts1} name="Family" />
      <ContactsSection contacts={contacts2} name="Friends" />
    </div>
  );
}