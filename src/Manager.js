//Initializing the Read Line Sync
const prompt = require("readline-sync");

//Initializing the Manager class
class Manager {
  constructor(name, restaurant, reception) {
    this.name = name;
    this.restaurant = restaurant;
    this.reception = reception;
  }

  //Manager Verification method
  managerVerification() {
    const nextAction = prompt
      .question("Do you want to continue? (y/n): ")
      .toLowerCase();
    switch (nextAction) {
      case "y":
        this.managerLogin();
        break;
      case "n":
        this.reception.welcome();
        break;
      default:
        console.log("Invalid selection, try again!");
        this.managerVerification();
        break;
    }
  }

  //Customer login method
  managerLogin() {
    console.log("\n👨‍💼--------------------------👨‍💼");
    console.log("    Welcome to Manager Page!    ");
    console.log("👨‍💼--------------------------👨‍💼\n");
    console.log("What would you like to do?\n");
    console.log(
      "1. ➕ Add New Items to Menu\n" +
        "2. ➖ Remove Items from Menu\n" +
        "3. 📜 Display Menu\n" +
        "4. 🔄 Update the Menu\n" +
        "5. ⭐ Display Customer Ratings\n" +
        "6. 🏠 Back to Home Page\n" +
        "______________________________"
    );

    //Asking customer for an operation
    const userInput = prompt.question("Enter a number: ");

    switch (userInput) {
      case "1":
        this.restaurant.addItem();
        break;
      case "2":
        this.restaurant.removeItem();
        break;
      case "3":
        this.restaurant.displayMenu();
        this.managerVerification();
        break;
      case "4":
        this.restaurant.updateMenu();
        break;
      case "5":
        this.restaurant.displayRatings();
        break;
      case "6":
        this.reception.welcome();
        break;
      default:
        console.log("Invalid Selection!");
        this.managerLogin();
        break;
    }
  }
}

//Exporting the Manager module
module.exports = Manager;
