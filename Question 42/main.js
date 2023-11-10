function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

var magicianNames = ["Azmeer", "Khalil", "Yousaf", "Ammar"];

make_great(magicianNames);

show_magicians(magicianNames);
