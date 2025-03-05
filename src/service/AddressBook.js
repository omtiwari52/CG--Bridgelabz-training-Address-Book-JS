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

        const duplicateCount = this.contacts.reduce((count, c) =>
            (c.firstName === contact.firstName && c.lastName === contact.lastName ? count + 1 : count), 0
        );

        if (duplicateCount > 0) {
            throw new Error(`Contact with name ${contact.firstName} ${contact.lastName} already exists.`);
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

    // Method to count the number of contact in the address book
    getContactCount = () => {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    // Method to search for a person using city or state
    searchByCity = (city) => {
        return this.contacts.filter(contact => contact.city === city);
    }

    // Search contacts by State
    searchByState = (state) => {
        return this.contacts.filter(contact => contact.state === state);
    }

    // View person by city
    viewByCity = (city) => {
        return this.contacts.reduce((result,contact) =>{
            if(!result[contact.city]){
                result[contact.city] =[];
            }
            result[contact.city].push(contact)
            return result;
        });
    }

    // view person by state
    viewByState = (state) => {
        return this.contacts.reduce((result,contact) =>{
            if(!result[contact.state]){
                result[contact.state] =[];
            }
            result[contact.state].push(contact)
            return result;
        });
    }


    // Method to get the contact
    getContact = () => {
        return this.contacts;
    }


}

module.exports = AddressBook;