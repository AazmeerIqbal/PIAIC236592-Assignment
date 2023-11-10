var peopleToInvite = ["Adeeb", "Hassan", "Khalil", "Mohsin"];

for (var i = 0; i < peopleToInvite.length; i++) {
    console.log("I would like to invite " + peopleToInvite[i] + " for the dinner.");
}

console.log("\nMr." + peopleToInvite[0] + "can not come to the dinner. The new invitations are:\n")

var peopleToInviteUpdated = ["Saim", "Hassan", "Khalil", "Mohsin"];

for (var i = 0; i < peopleToInviteUpdated.length; i++) {
    console.log("I would like to invite " + peopleToInviteUpdated[i] + " for the dinner.");
}

console.log("\nI found a bigger dinner table\n")

var peopleToInviteUpdated2 = ["Ali", "Saim", "Hassan", "Rehan", "Khalil", "Mohsin"];

peopleToInviteUpdated2.push("Huzaifa");

console.log("Sorry, we can invite only two people for dinner.");

while (peopleToInviteUpdated2.length > 2) {
    var removedPerson = peopleToInviteUpdated2.pop();
    console.log("Sorry, " + removedPerson + ", we can't invite you to dinner.");
}

for (var i = 0; i < peopleToInviteUpdated2.length; i++) {
    console.log("You're still invited, " + peopleToInviteUpdated2[i] + "!");
}

peopleToInviteUpdated2.pop();
peopleToInviteUpdated2.pop();

console.log("Final List: " + peopleToInviteUpdated2.join(", "));




