import { Component } from 'react';

export class ContactListItem extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    isEdit: false,
  };

  handleEditContact = () => {
    if (this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({ isEdit: false });
      this.props.editContact({
        id: this.props.contact.id,
        name: this.props.contact.name,
        number: this.props.contact.number,
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li key={contact.id}>
        {this.state.isEdit ? (
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
        ) : (
          <p>Name:{contact.name}</p>
        )}
        {this.state.isEdit ? (
          <label>
            Number:
            <input
              type="text"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
            />
          </label>
        ) : (
          <p>Number:{contact.number}</p>
        )}
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={this.handleEditContact}>
          {this.state.isEdit ? 'Save' : 'Edit'}
        </button>
      </li>
    );
  }
}
