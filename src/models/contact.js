class contact{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.validateName(firstName);
        this.validateName(lastName);
        this.validateAddress(address, "Address", 4);
        this.validateMinLength(city, "City", 4);
        this.validateMinLength(state, "State", 4);
        this.validateZip(zip);
        this.validatePhone(phoneNumber);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    validateName = (name) => {
        const regexPattern = /^[A-Z][a-zA-Z]{2,}$/
        if (!regexPattern.test(name)) {
            throw new Error(`${name} is not valid please check try again!`);
        }
    }

    validateAddress = (value, minLength) => {
        if (value.length < minLength) {
            throw new Error(`${value} for address is not valid it must have atleast ${minLength} characters`);
        }
    }

    validateZip = (zipCode) => {
        const zipPattern = /^[0-9]{5,6}$/;
        if(!zipPattern.test){
            throw new Error("Zip must be of length 5 or 6 and only contains number " + zipCode);
        }
    }

    validatePhone = (phone)=> {
        const phonePattern = /^[0-9]{10}$/; 
        if (!phonePattern.test(phone)) {
            throw new Error("Phone number must be a valid 10-digit number.");
        }
    }

    validateEmail = (email)=> {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
    }
}

export default Contact;