let newAddressBookArray = [];
let askAgain = "yes";
const prompts = require("prompt-sync")();
let index = 0;

function addNewAddress() {
    askAgain = prompts("Enter yes to add the record OR no for exit: ").toLowerCase();
    if (askAgain == "yes") {
        let data = getData();

        newAddressBookArray.push(data);
        console.log(newAddressBookArray);
        addNewAddress();
    }
}
addNewAddress();


//UC => 4
function getData() {
    let addressBook = {};
    //For first name
    let firstName = prompts("Enter your first name: ");
    addressBook.firstName = firstName;

    //For last name
    let lastName = prompts("Enter your last name: ")
    addressBook.lastName = lastName;

    //For address
    let address = prompts("Enter your address here: ");
    addressBook.address = address;

    //For city
    let city = prompts("Enter your city here: ");
    addressBook.city = city;

    //For state
    let state = prompts("Enter your state here: ");
    addressBook.state = state;

    //For zip
    let zip = prompts("Enter zip code here: ");
    addressBook.zip = zip;

    //For phone number
    let phoneNumber = prompts("Enter your phone number here: ");
    addressBook.phoneNumber = phoneNumber;

    //For email
    let email = prompts("Enter your email here: ");
    addressBook.email = email;

    return addressBook;
}

function findExistingContact() {

    let firstName = prompts("Enter first name to find the record: ");
    let obj = newAddressBookArray.find(address => {
        if (address.firstName == firstName) {
            return true;
        }
        index++;
    });
    if (newAddressBookArray.length === index) {
        console.log("Record not found");
        console.log("**************************************");
    } else {
        console.log("Record found at: " + index);
        askAgain = prompts("Want to edit the data type yes for edit no for exit: ").toLowerCase();
        if (askAgain == "yes") {
            let updatedData = getData();
            newAddressBookArray[index] = updatedData;
            console.log("Data is updated: ", newAddressBookArray);
        }
    }
}
findExistingContact();


//UC => 5
function deletePersonWithName() {
    let firstName = prompts("Enter first name to find the record: ");
    let obj = newAddressBookArray.find(address => {
        if (address.firstName == firstName) {
            return true;
        }
        index++;
    });
    if (newAddressBookArray.length === index) {
        console.log("Record not found");
        console.log("**************************************");
    } else {
        console.log("Record found at: " + index);
        askAgain = prompts("Want to delete the record? Type yes for delete no for exit: ").toLowerCase();
        if (askAgain == "yes") {
            newAddressBookArray.splice(index, 1);
            console.log("Data after deletion: ", newAddressBookArray);
        }
    }
}
deletePersonWithName();

//UC => 6
function countNumberOfContacts() {
    let displayCount = prompts("Want to display number of contacts? then Press 1 for display: ");
    if (displayCount == 1) {
        console.log("Number of contacts in an address book: ",
            newAddressBookArray.reduce(count => count + 1, 0));
    }
}

countNumberOfContacts();