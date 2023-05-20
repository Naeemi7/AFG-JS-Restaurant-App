# AFG-JS-Restaurant-App

This repository contains a command-line AFG-JS-Restaurant-App implemented in JavaScript. The system allows managers to perform various operations such as adding new items to the menu, removing items from the menu, updating the menu, displaying the menu, and viewing customer ratings. Customers can provide feedback on their food satisfaction.

## Installation

To use the restaurant management system, follow these steps:

1. Clone the repository to your local machine:

```shell
  git clone git@github.com:Naeemi7/AFG-JS-Restaurant-App.git
```

2. Navigate to the project directory:

```shell
  cd restaurant-management-system
```

3. Install the required dependencies

```shell
  npm i readline-sync
```

4. Run the application:

```shell
 node index.js
```

## Usage

Upon running the application, you will be presented with a welcome screen where you can choose to login as a customer or a manager. Enter the corresponding number and press Enter to proceed.

## Manager

If you choose to log in as a manager, you will be able to perform the following operations:

1. Add New Items to Menu: Add new food items to the restaurant's menu. You will be prompted to enter the name, price, category, and description of the food item.
2. Remove Items from Menu: Remove existing food items from the restaurant's menu. You will be prompted to enter the name of the item to be removed.
3. Display Menu: Display the current menu of the restaurant.
4. Update the Menu: Update the details of existing food items in the menu. You will be prompted to enter the name of the item to be updated and then provide the new values for the name, price, category, and description.
5. Display Customer Ratings: Display the average rating of the restaurant based on customer feedback.
6. Back to Home Page: Return to the welcome screen.

## Customer

If you choose to log in as a customer, you will be able to provide feedback on your food satisfaction. You will be prompted to rate your satisfaction on a scale of 1 to 10. After providing your feedback, you will be thanked and returned to the welcome screen.

## Data

The menu data is stored in the Menu.js file. It contains an array of food items, each with an ID, name, price, category, and description.

## Dependencies

The AFG-JS-Restaurant-App uses the following dependencies:

- `readline-sync`: Allows for synchronous user input in the command-line interface.

## Technologies Used

- Programming Language: [JavaScript](https://www.javascript.com/)

## Contributing

Contributions to the AFG-JS-Restaurant-App are welcome. If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.
