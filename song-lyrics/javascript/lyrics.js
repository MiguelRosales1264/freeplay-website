// Function to hide / dipslay the lyrics
function toggleLyrics() {
    // Get the lyrics element
    var lyrics = document.getElementById("lyrics");

    // Get the button element
    var button = document.getElementById("lyricsButton");
    // Check if the lyrics are hidden
    if (lyrics.style.display === "none") {
        // Show the lyrics
        lyrics.style.display = "block";
        // Change the button text
        button.innerHTML = "Hide Lyrics";
    } else {
        // Hide the lyrics
        lyrics.style.display = "none";
        // Change the button text
        button.innerHTML = "Show Lyrics";
    }
}

// Function to change the color of the lyrics
function changeColor() {
    // Get the lyrics element
    var lyrics = document.getElementById("lyrics");
    // Get the button element
    var button = document.getElementById("changeColorButton");

    // Get a random color
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Set the color of the lyrics
    lyrics.style.color = color;

    // Set the color of the button
    button.style.color = color;
}