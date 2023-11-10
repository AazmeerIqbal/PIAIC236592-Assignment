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

peopleToInviteUpdated2.push("Huzaifa")

for (var i = 0; i < peopleToInviteUpdated2.length; i++) {
    console.log("I would like to invite " + peopleToInviteUpdated2[i] + " for the dinner.");
}



