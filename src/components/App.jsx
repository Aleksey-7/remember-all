import { Component } from 'react';
import { getFilteredArray } from 'utils/getFilteredArray';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isUnique = this.state.contacts.find(
      item => item.name === contact.name
    );
    if (isUnique) {
      alert(`${contact.name} already exists`);
      return false;
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = getFilteredArray(
      this.state.contacts,
      'name',
      this.state.filter
    );
    return (
      <div>
        <Section title="Add Contact">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Search">
          <Filter value={this.state.filter} setValue={this.setFilter} />
        </Section>
        <Section title="Contact List">
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
