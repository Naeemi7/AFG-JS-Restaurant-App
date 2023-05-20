//Initializing the Read Line Sync
const prompt = require("readline-sync");

//Importing the Restaurant, Manager, Customer, and menu Modules
const Restaurant = require("./Restaurant");
const Manager = require("./Manager");
const Customer = require("./Customer");
const menu = require("./Menu");

//Initializing the Reception class
class Reception {
  //Welcome method
  welcome() {
    console.log("🍽️---------------------------🍽️");
    console.log("  Welcome to AFG Restaurant!   ");
    console.log("🍽️---------------------------🍽️\n");
    console.log("Are you a Customer or a Manager?\n");
    console.log("1. 👤 Customer\n2. 💼 Manager\n3. ❌ Exit");

    const user = prompt.question("\nEnter the number: ");

    switch (user) {
      case "1":
        customer.customerLogin();
        break;
      case "2":
        manager.managerLogin();
        break;
      case "3":
        console.log(
          "\n👋 Thanks for visiting AFG restaurant! Come again soon!\n"
        );
        break;
      default:
        console.log("\nInvalid Input\n");
        this.welcome();
    }
  }
}

//Creating an instance of the Reception class
const reception = new Reception();

//Creating an instance of the Restaurant class
const afgRestaurant = new Restaurant(menu);

//Creating an instance of the Customer class passing name, restaurant name, and instance of reception class as argument
const customer = new Customer("Alice", afgRestaurant, reception, menu);

//Creating an instance of the Manager class and passing name, restaurant name, and instance of reception class as argument
const manager = new Manager("John", afgRestaurant, reception);

//update the instance of restaurant
afgRestaurant.manager = manager;
afgRestaurant.reception = reception;
afgRestaurant.customer = customer;

reception.welcome();

//Exporting the Reception module
module.exports = Reception;
