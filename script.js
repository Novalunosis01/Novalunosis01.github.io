function showLetter() {
    var letter = document.getElementById("letter");
    var envelope = document.getElementById("envelope");

    // Make the envelope disappear
    envelope.style.opacity = 0;

    // Reveal the letter
    if (letter.style.height === "0px" || letter.style.height === "") {
        setTimeout(function() {
            letter.style.height = "600px"; // Adjust this value to fit the content of your letter
            letter.firstElementChild.style.opacity = 1;
        }, 300);
    } else {
        letter.style.height = "0";
        letter.firstElementChild.style.opacity = 0;
    }
}
