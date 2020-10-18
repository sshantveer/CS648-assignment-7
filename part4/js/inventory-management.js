/*eslint-env browser*/

function display_Menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Managemet Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Updates the existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view(inventoryList) {
    "use strict";
    inventoryList.sort();
    var index;
    for (index = 0; index < inventoryList.length; index++) {
        window.console.log(inventoryList[index][0] + " " + inventoryList[index][1] + " (" + inventoryList[index][2] + ") $" + inventoryList[index][3]);
    }
    window.console.log("");
}

function update(inventoryList) {
    "use strict";
    var number = window.prompt("Enter a sku number!");
    var stock = window.prompt("Enter a stock quantity!");
    if(number !== "" && stock !== "") {
        for (var i = 0; i <= inventoryList.length; i++) {
            if (inventoryList[i][0] == number) {
                inventoryList[i][2] = stock;
                break;
            }
        }
    }
}

function main() {
    "use strict";
    display_Menu();

    var inventoryList = [[4824, "Shirt", 10, 15.99], 
                [6343, "Jeans", 22, 39.99], 
                [3223, "Socks", 36, 9.99], 
                [2233, "Hat", 12, 14.99], 
                [9382, "Jacket", 5, 49.99]];

    while (true) {
        var command = window.prompt("Enter Command! View, Update or Exit");
        if (command !== null) {
            command = command.toLowerCase();
            if (command === "view") {
                view(inventoryList);
            } else if (command === "update") {
                update(inventoryList);
                view(inventoryList);
            } else if (command === "exit") {
                break;
            } else {
                window.alert(command +": Is not a valid command!");
            }
        } else {
            window.alert("Enter 'Exit' to exit the program!");
        }
    }
}

main();
