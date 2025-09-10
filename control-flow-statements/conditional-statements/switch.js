const prompt = require('prompt-sync')();
let day = prompt("enter the day: ");

// let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Sunday":
        console.log("Weekend!");
        break;

    default:
        console.log("Regular day");
        break;
}