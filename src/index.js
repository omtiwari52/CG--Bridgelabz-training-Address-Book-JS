const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");

const addressBook = new AddressBook();

try {
    addressBook.addContact({ firstName: "Omi", lastName: "Tiwari", address:"Anand Nagar",city: "Satna", state: "Madhya Pradesh", zip: 485001 ,phone: 8067354789,email:"omtiwari2009@gmail.com"});
    addressBook.addContact({ firstName: "Durgesh", lastName: "Kushwaha", address:"Ashoka Garden",city: "Bhopal", state: "Madhya Pradesh", zip: 462001 ,phone:8956329056,email:"durgeshkushwaha@gmail.com" });
    addressBook.addContact({ firstName: "Bipin", lastName: "sahu", address:"Press Colony",city: "Lucknow", state: "Uttar Pradesh", zip: 60601,phone:9897969504,email:"bipinsahu456@gmail.com" });
    console.log("Original Entries: ");
    
    addressBook.getContact().forEach(contact =>{
        console.log(contact);
    })

    console.log("Entries after sorting by city:");
    
    addressBook.sortByCity();
    addressBook.getContact().forEach(contact =>{
        console.log(contact);
    })

    // Sort contacts alphabetically by name
    console.log("Entries after sorting by name:");
    
    const sortedContacts = addressBook.sortContactsByName();
    sortedContacts.forEach(contact => console.log(contact));

    

} catch (error) {
    console.log(error);
}