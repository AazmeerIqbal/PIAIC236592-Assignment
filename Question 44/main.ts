function makeSandwich2(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }

    console.log("Bread\n");
}

makeSandwich2("Cheese", "Tomato", "Lettuce");
makeSandwich2("Turkey", "Swiss", "Mayo", "Mustard");
makeSandwich2("Peanut Butter", "Jelly");
