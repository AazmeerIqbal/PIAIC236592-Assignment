var current_users = ["admin", "Aazmeer", "Khalil", "Adeeb", "Rehan"];

var new_users = ["Ali", "Adeeb", "Zohaib", "Aazmeer", "Raza"];

for (var i = 0; i < new_users.length; i++) {
    var lowercaseNewUser = new_users[i].toLowerCase();

    if (current_users.map(user => user.toLowerCase()).includes(lowercaseNewUser)) {
        console.log("Sorry, the username '" + new_users[i] + "' is not available. Please enter a new username.");
    } else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}
