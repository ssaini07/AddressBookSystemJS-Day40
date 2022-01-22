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
// for first name
let firstName = prompts("First name: ");
let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
if (firstNameRegex.test(firstName.value)) {
    console.log("First name is correct: " + firstName);
} else {
    console.log("First name is not correct: ");
}

// for last name
let lastName = prompts("Last name: ");
let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
if (lastNameRegex.test(lastName.value)) {
    console.log("Last name is correct: " + lastName);
} else {
    console.log("Last name is not correct: ");
}
// For address
let address = prompts("Address: ");
let addressRegex = RegExp('^[A-Za-z]{4,}$');
if (addressRegex.test(address.value)) {
    console.log("Address is correct: " + address);
} else {
    console.log("Entered address is not correct: ");
}

// For city
let city = prompts("City: ");
let cityRegex = RegExp('^[A-Za-z]{4,}$');
if (cityRegex.test(address.value)) {
    console.log("City is correct: " + city);
} else {
    console.log("Sorry entered city is not correct");
}

//for state
let state = prompts("State: ");
let stateRegex = RegExp('^[A-Za-z]{4,}$');
if (stateRegex.test(state.value)) {
    console.log("State is correct: " + state);
} else {
    console.log("Sorry entered state is not correct");
}

//for zip
let zip = prompts("Zip: ");
let zipRegex = RegExp('^[0-9]{6,}$');
if (zipRegex.test(zip.value)) {
    console.log("Zip is correct: " + zip);
} else {
    console.log("Sorry entered zip is not correct");
}

//for phone number
let phoneNumber = prompts("Phone number: ");
let phoneNumberRegex = RegExp('^([0-9]{2}\\s)?[0-9]{10}$');
if (phoneNumberRegex.test(phoneNumber.value)) {
    console.log("Phone number is correct: " + phoneNumber);
} else {
    console.log("Sorry entered phone number is not correct");
}

//for email
let email = prompts("Email: ");
let emailRegex = RegExp('^[a-z.+_-]+[.a-z0-9]*@[a-z0-9]+[.a-z]+[.a-z0-9]*$');
if (emailRegex.test(email.value)) {
    console.log("Email is correct: " + email);
} else {
    console.log("Sorry entered email is not correct");
}

createContactArr.push(new CreateContact(firstName, lastName, address, city, state, zip, phoneNumber, email));
console.log(createContactArr);