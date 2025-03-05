const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");

const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Omi", 
        "Tiwari",
        "Anand Nagar",
        "Satna City",
        "Madhya Pradesh", 
        "485001",  
        "8967342980", 
        "omtiwari2009@gmail.com"
    );
    
    myAddressBook.addContact(contact1);
    console.log(myAddressBook.getContact());

    // Sort contacts alphabetically by name
    const sortedContacts = myAddressBook.sortContactsByName();
    sortedContacts.forEach(contact => console.log(contact.toString()));

} catch (error) {
    console.log(error);
}