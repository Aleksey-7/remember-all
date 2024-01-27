import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        );
      })}
    </ul>
  );
};
