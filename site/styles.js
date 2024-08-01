function showLetter() {
    var letter = document.getElementById("letter");
    if (letter.style.height === "0px" || letter.style.height === "") {
        letter.style.height = "100px"; // Adjust this value to fit the content of your letter
        setTimeout(function() {
            letter.firstElementChild.style.opacity = 1;
        }, 300);
    } else {
        letter.style.height = "0";
        letter.firstElementChild.style.opacity = 0;
    }
}
