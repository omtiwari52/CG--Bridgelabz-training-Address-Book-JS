
const Contact = require('../model/Contact.js');

class AddressBook{
    // Creating an array instance as the user make a book
    constructor(){
        this.contacts = [];
    }

    addContact = (contact)=>{
        if(!contact instanceof Contact){
            throw new Error(`Invalid contact ${contact}. Must be an instance of Contact`);
        }
        // Add the new contact in the contact array
        this.contacts.push(contact);
    }

    // Method to get the contact
    getContact = ()=>{
        return this.contacts;
    }


}

module.exports = AddressBook;