class CreateContact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let createContactArr = new Array();

const prompts = require("prompt-sync")();

let firstName = prompts("First name: ");
console.log(firstName);
let lastName = prompts("Last name: ");
console.log(lastName);
let address = prompts("Address: ");
console.log(address);
let city = prompts("City: ");
console.log(city);
let state = prompts("State: ");
console.log(state);
let zip = prompts("Zip: ");
console.log(zip);
let phoneNumber = prompts("Phone number: ");
console.log(phoneNumber);
let email = prompts("Email: ");
console.log(email);

createContactArr.push(new CreateContact(firstName, lastName, address, city, state, zip, phoneNumber, email));
console.log(createContactArr);