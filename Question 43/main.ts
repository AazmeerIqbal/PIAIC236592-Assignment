function show_magicians2(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

var magicianNames = ["Azmeer", "Khalil", "Yousaf", "Ammar"];

var greatMagicians = make_great2([...magicianNames]);
console.log("Original Magicians:");
show_magicians2(magicianNames);

console.log("\nGreat Magicians:");
show_magicians2(greatMagicians);
