//Initializing the Read Line Sync
const prompt = require("readline-sync");

//Initializing the Customer class
class Customer {
  constructor(name, restaurant, reception, menu) {
    this.name = name;
    this.restaurant = restaurant;
    this.reception = reception;
    this.menu = menu;
    this.orderName;
    this.orderQuantity;
    this.orderIndex;
    this.orderArray = [];
  }

  //Customer Verification method
  customerVerification() {
    const nextAction = prompt
      .question("Do you want to continue? (y/n): ")
      .toLowerCase();
    switch (nextAction) {
      case "y":
        this.customerLogin();
        break;
      case "n":
        this.reception.welcome();
        break;
      default:
        console.log("Invalid selection, try again!");
        this.customerVerification();
    }
  }

  // Order Item method
  orderItem() {
    //Ask the user for the order
    this.orderName = Number(prompt.question("\nEnter the Food ID from menu: "));
    this.orderQuantity = Number(prompt.question("Enter the order quantity: "));

    //checks if the ordered item exists in the menu
    this.orderIndex = this.menu.findIndex((item) => item.ID === this.orderName);

    if (this.orderIndex === -1) {
      console.log(`\n${this.orderIndex} is not available in the menu!\n`);

      const orderAgain = prompt.question(
        "Do you want to order something else? (y/n): "
      );

      //check if the customer wants to order something else
      switch (orderAgain) {
        case "y":
          this.orderItem();
          break;
        default:
          console.log("\nThanks for coming to AFG restaurant! \n");
          restaurant.welcome();
          break;
      }
    } else {
      console.log(
        `\nYou orded ${this.orderQuantity} ${this.menu[this.orderIndex].name}`
      );

      //Asking the customer for order confirmation
      const confirmOrder = prompt
        .question(
          `\nConfirm the order of ${this.orderQuantity} ${
            this.menu[this.orderIndex].name
          }: (yes/no): `
        )
        .toLowerCase();

      //Ask the Customer to confirm the order
      if (confirmOrder === "yes") {
        this.orderArray.push({
          ID: this.orderName,
          name: this.menu[this.orderIndex].name,
          price: this.menu[this.orderIndex].price,
          category: this.menu[this.orderIndex].category,
          quantity: this.orderQuantity,
          description: this.menu[this.orderIndex].description,
        });

        console.table(this.orderArray, [
          "ID",
          "name",
          "price",
          "category",
          "quantity",
          "description",
        ]);
        console.log("\nYour order was confirmed!\n");
        this.customerLogin();
      } else {
        this.orderItem();
      }
    }
  }

  //Get Receipt method
  getReceipt() {
    const calculatedReceipt = this.orderArray.map((order) => {
      const total = order.quantity * order.price;
      return {
        ID: order.ID,
        name: order.name,
        price: order.price,
        category: order.category,
        quantity: order.quantity,
        total: Number(total.toFixed(2)),
        description: order.description,
      };
    });

    //To calculate the total amount of all the orders
    const totalAmount = this.orderArray.reduce((sum, order) => {
      return sum + order.quantity * order.price;
    }, 0);

    console.log("\nYour receipt was calculated!");
    console.table(calculatedReceipt, [
      "ID",
      "name",
      "price",
      "category",
      "quantity",
      "total",
      "description",
    ]);

    //Tip calculation
    const tips = Number(
      prompt.question("\nDo you want to add a tip? (Leave empty if not): ")
    );
    if (tips > 0) {
      const finalAmount = totalAmount + tips;
      console.log(
        `\nReceipt amount: ${totalAmount}€, tip: ${tips}€, total amount: ${finalAmount.toFixed(
          2
        )}€\n`
      );
    } else {
      console.log(`\nTotal Amount: ${totalAmount.toFixed(2)}€`);
    }

    //Empty the orderArray after receipt is calculated
    this.orderArray = [];
  }

  //Customer Login Method
  customerLogin() {
    console.log("\n🌟--------------------------🌟");
    console.log("   Welcome to Customer Page!   ");
    console.log("🌟--------------------------🌟\n");
    console.log("What would you like to do?\n");
    console.log(
      "1. 📜 Display Menu\n" +
        "2. 🍽️  Order Food\n" +
        "3. 🧾 Ask for Receipt\n" +
        "4. 💬 Share Feedback\n" +
        "5. ⭐ Display Customer Ratings\n" +
        "6. 🏠 Back to Home Page\n" +
        "______________________________"
    );

    //Asking customer for an operation
    const userInput = prompt.question("Enter a number: ");

    switch (userInput) {
      case "1":
        this.restaurant.displayMenu();
        this.customerVerification();
        break;
      case "2":
        this.orderItem();
        this.customerVerification();
        break;
      case "3":
        this.getReceipt();
        break;
      case "4":
        this.restaurant.feedBack();
        this.customerVerification();
        break;
      case "5":
        this.restaurant.displayRatings();
        this.customerVerification();
        break;
      case "6":
        this.reception.welcome();
        break;
      default:
        console.log("\nInvalid selection\n");
        this.customerVerification();
        break;
    }
  }
}

//Exporting the Customer class
module.exports = Customer;
