for(var i = 0; i <= 15; i++) {
    if(i%2) {
        console.log(i + " is odd");
    } else {
        console.log(i + " is even");
    }
}

var stars = ""
for(var i = 0; i < 5; i++) {
    stars += "* ";
    console.log(stars);
}

for(var i = 0; i < 100; i++) {
    var word = ""
    if (i%3 === 0) { word += "Code"; }
    if (i%5 === 0) { word += "Monkey"; }
    if ( word !== "") {
        console.log(word);
    } else {
        console.log(i);
    }
}