const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");


const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact("Harsh veer", "singh", "Bhopal", "Madhya Pradesh", 462038, 7828159961, "harshveer7828@gmail.com");
    myAddressBook.addContact(contact1);
    console.log(myAddressBook.getContact);
} catch (error) {

}