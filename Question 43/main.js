function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

var magicianNames = ["Azmeer", "Khalil", "Yousaf", "Ammar"];

var greatMagicians = make_great([...magicianNames]);
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
