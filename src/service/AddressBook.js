const Contact = require('../model/Contact.js');

class AddressBook {
    // Creating an array instance as the user make a book
    constructor() {
        this.contacts = [];
    }

    addContact = (contact) => {
        if (!contact instanceof Contact) {
            throw new Error(`Invalid contact ${contact}. Must be an instance of Contact`);
        }
        // Add the new contact in the contact array
        this.contacts.push(contact);
    }
    // Method to find the contact in the contact book using their name
    findContact = (firstName, lastName) => {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    // Method to update the contact in the address book
    editContact = (firstName, lastName, updatedData) => {
        const contact = this.findContact(firstName, lastName);
        if (!contact) {
            throw new Error("Contact not found.");
        }

        Object.keys(updatedData).forEach(key => {
            if (contact.hasOwnProperty(key)) {
                contact[key] = updatedData[key];
            }
        });

        return contact;
    }

    // Method to delete the contact from the book
    deleteContact = (firstName, lastName) => {
        const index = this.contacts.findIndex(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        );

        if (index === -1) {
            throw new Error("Contact not found.");
        }

        return this.contacts.splice(index, 1)[0];
    }


    // Method to get the contact
    getContact = () => {
        return this.contacts;
    }


}

module.exports = AddressBook;