// timer.js
const { exec } = require('child_process');

// 1. Get the minutes from the command line arguments
// process.argv array looks like: ['node', 'timer.js', '5']
const args = process.argv.slice(2);
console.log(args);

// 2. Define the notification content

// Get slice for the notification title
let notificationTitle;
// (args.length === 3) ? notificationTitle = args[1] : notificationTitle = "This is a default title";
notificationTitle === null ? console.error("")


// Get slice for the notification content
let notificationContent;
(args.length === 3) ? notificationContent = args[2] : notificationContent = "This is a default message";

// 3. Validate the input to ensure it's a number
const minutes = parseFloat(args[0]);
if (isNaN(minutes) || minutes <= 0) {
    console.error("Error: Please provide a valid number of minutes.");
    console.log("Usage: node timer.js <minutes>");
    process.exit(1); // Exit the script with an error code
}

console.log(`Timer successfully set for ${minutes} minute(s)...`);

// 4. Convert minutes to milliseconds (1 minute = 60,000 milliseconds)
const milliseconds = minutes * 60 * 1000;

// 5. Start the countdown
setTimeout(() => {
    // AppleScript command to trigger a macOS notification
    const macCommand = `terminal-notifier -message "${notificationContent}" -title "${notificationTitle}"`;

    // Execute the command in the macOS shell
    exec(macCommand, (error) => {
        if (error) {
            console.error("Failed to send notification:", error);
        } else {
            console.log("Notification sent successfully!");
        }
    });
}, milliseconds);