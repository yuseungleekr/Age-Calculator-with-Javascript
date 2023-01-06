var age = prompt("How old are you?", "");

if (age <= 18) {
    document.write("<h3>You are a kido :)</h3>");
} else if (18 < age && age <= 30) {
    document.write("<h3>You're young</h3>");
} else {
    document.write("<h3>You are old</h3>");
}