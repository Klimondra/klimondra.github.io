var video = document.getElementById("fullscreen-video");
var endImage = document.getElementById("end-image");

// Událost, která se spustí po skončení videa
video.addEventListener("ended", function() {
  video.style.display = "none"; // Skryjeme video
  endImage.style.display = "block"; // Zobrazíme obrázek
});