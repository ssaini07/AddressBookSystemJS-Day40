let newAddressBookArray = [];
let askAgain = "yes";
const prompts = require("prompt-sync")();

function addNewAddress() {
    let addressBook = {};
    askAgain = prompts("Enter yes to add the record OR no for exit: ").toLowerCase();
    if (askAgain == "yes") {

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

        newAddressBookArray.push(addressBook);
        console.log(newAddressBookArray);
        addNewAddress();
    }
}
addNewAddress();