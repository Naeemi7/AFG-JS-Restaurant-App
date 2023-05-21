//Initializing the Read Line Sync
const prompt = require("readline-sync");

//Initializing Restaurant Class
class Restaurant {
  constructor(menu, manager, reception) {
    this.menu = menu;
    this.manager = manager;
    this.reception = reception;
    this.feedbackArray = [];
  }

  // Add Items to Menu Method
  addItem() {
    console.log("");
    const name = prompt.question("Enter the food name: ").toLowerCase();

    //Check if the food name is already in the menu
    if (this.menu.find((item) => item.name === name)) {
      console.log("");
      console.log(`${name} already exists in the menu!\n`);
      this.addItem();
      return;
    }

    const price = parseFloat(prompt.question("Enter the price of food: "));
    const category = prompt.question("Enter the category of Food: ");
    const description = prompt.question("Enter the description: ");

    //Push the added items to the menu
    const ID = this.menu.length;
    this.menu.push({ ID, name, price, category, description });

    //Notify the Manager that the item has been added
    console.log("");
    console.log(`${name} was successfully added!`);

    //An array of added items object
    const addedItems = [
      {
        ID: ID,
        name: name,
        price: price,
        category: category,
        description: description,
      },
    ];
    console.table(addedItems, [
      "ID",
      "name",
      "price",
      "category",
      "description",
    ]);

    //Ask the Manager to add more items to the menu
    console.log("");
    const option = prompt
      .question("Do you want to add more food? (y/n): ")
      .toLowerCase();

    switch (option) {
      case "y":
        this.addItem();
        break;

      case "n":
        this.manager.managerLogin();
        break;

      default:
        console.log("\nInvalid selection, try again!");
        this.manager.managerLogin();
        break;
    }
  }

  //Remove items from menu method
  removeItem() {
    console.log("");
    const itemToRemove = prompt
      .question("Enter the name of the item to delete: ")
      .toLowerCase();

    //to check if the food is already in the menu
    const findItemIndex = this.menu.findIndex(
      (item) => item.name === itemToRemove
    );

    //Validate if the item isn't available in the menu
    if (findItemIndex === -1) {
      console.log("");
      console.log(`${itemToRemove} is not available in the menu!\n`);

      const tryAgain = prompt.question("Do you want to try again? (y/n): ");

      switch (tryAgain) {
        case "y":
          this.removeItem();
          break;
        case "n":
          this.manager.managerLogin();
          break;
        default:
          console.log("\nInvalid selection, try again!");
          this.manager.managerLogin();
          break;
      }
      return;
    }

    //Notify the Manager that the item has been added
    console.log("");
    console.log(`${itemToRemove} was successfully removed!`);

    //Display the removed item for the Manager
    const removedItem = this.menu.splice(findItemIndex, 1)[0];
    const removedItems = [
      {
        ID: removedItem.ID,
        name: removedItem.name,
        price: removedItem.price,
        category: removedItem.category,
        description: removedItem.description,
      },
    ];

    console.table(removedItems, [
      "ID",
      "name",
      "price",
      "category",
      "description",
    ]);

    //Verify if the Manager wants to remove more items!
    console.log("");
    const removeAgain = prompt
      .question("Remove another item? (y/n): ")
      .toLowerCase();

    switch (removeAgain) {
      case "y":
        this.removeItem();
        break;
      case "n":
        this.manager.managerLogin();
        break;
      default:
        console.log("\nInvalid selection, try again!");
        this.manager.managerLogin();
        break;
    }
  }

  //Update menu method
  updateMenu() {
    console.log("");
    const itemName = prompt
      .question("Enter the food name to update: ")
      .toLowerCase();

    //Checks if the food is already in the menu
    const itemIndex = this.menu.findIndex((item) => item.name === itemName);

    if (itemIndex === -1) {
      console.log("");
      console.log(`${itemName} is not found in the menu\n`);
      const tryAgain = prompt.question("Do you want to try again? (y/n): ");

      switch (tryAgain) {
        case "y":
          this.updateMenu();
          break;
        case "n":
          this.manager.managerLogin();
          break;
        default:
          console.log("\nInvalid selection, try again!");
          this.manager.managerLogin();
          break;
      }
      return;
    }

    const food = this.menu[itemIndex];

    //Display the food details to be edited
    console.log("");
    console.log(`Editing ${itemName}... \n`);

    //An array of items object to be edited
    const selectedItem = [
      {
        ID: food.ID,
        name: food.name,
        price: food.price,
        category: food.category,
        description: food.description,
      },
    ];
    console.table(selectedItem, [
      "ID",
      "name",
      "price",
      "category",
      "description",
    ]);

    //New object to store the edited items
    const newItems = {};

    //Assigning the new items as value to the newItems object
    console.log("");
    newItems.name = prompt.question(
      "Enter the new name (or leave blank to keep current name): "
    );
    newItems.price = parseFloat(
      prompt.question(
        "Enter the new price (or leave blank to keep current price): "
      )
    );
    newItems.category = prompt.question(
      "Enter the new category (or leave blank to keep current category): "
    );
    newItems.description = prompt.question(
      "Enter the new description (or leave blank to keep current description): "
    );

    //Updating the items with the new values
    Object.keys(newItems).forEach((key) => {
      const value = newItems[key];
      if (value) {
        food[key] = value;
      }
    });

    //Notify the Manager that the items have been updated
    console.log("");
    console.log(`${itemName} was successfully updated!\n`);

    const updatedValues = [
      {
        ID: food.ID,
        name: food.name,
        price: food.price,
        category: food.category,
        description: food.description,
      },
    ];
    console.table(updatedValues, [
      "ID",
      "name",
      "price",
      "category",
      "description",
    ]);

    //Asking the Manager if want to update the items again
    console.log("");
    const newUpdate = prompt.question("Do you want to update again? (y/n): ");

    switch (newUpdate) {
      case "y":
        this.updateMenu();
        break;
      case "n":
        this.manager.managerLogin();
        break;
      default:
        console.log("\nInvalid selection, try again!");
        this.manager.managerLogin();
        break;
    }
  }

  //Display Ratings method
  displayRatings() {
    // Calculate the average of the feedback ratings
    const averageRating =
      this.feedbackArray.reduce(
        (acc, currentRating) => acc + currentRating,
        0
      ) / this.feedbackArray.length;

    const stars = "⭐";

    //Concatinates the Star string if the 2 <rating <10
    const rating =
      averageRating < 2 || averageRating > 10
        ? "👎"
        : stars.repeat(Math.floor(averageRating));
    console.log("");
    console.log(`Feedback Average: ${rating}\n`);
    return this.reception.welcome();
  }

  //Feedback method
  feedBack() {
    console.log("");
    const foodSatisfaction = Number(
      prompt.question("Rate your food satisfaction on a scale of 1 to 10: ")
    );

    if (foodSatisfaction > 10) {
      console.log("");
      console.log("Invalid rating range! Please try again!");
      return this.feedBack();
    }
    this.feedbackArray.push(foodSatisfaction);
    console.log("");
    console.log("Thank you for your invaluable feedback!\n");

    this.customer.customerLogin();
  }

  //Display Menu Method
  displayMenu() {
    console.log("");
    console.table(this.menu, [
      "ID",
      "name",
      "price",
      "category",
      "description",
    ]);
    console.log("");
  }
}

//Exporting the Restaurant module
module.exports = Restaurant;
