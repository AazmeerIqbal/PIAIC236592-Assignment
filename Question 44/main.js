function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");

    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }

    console.log("Bread\n");
}

makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Swiss", "Mayo", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
