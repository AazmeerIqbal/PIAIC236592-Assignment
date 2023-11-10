function show_magicians2(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great2(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

var magicianNames = ["Azmeer", "Khalil", "Yousaf", "Ammar"];

make_great2(magicianNames);

show_magicians2(magicianNames);
