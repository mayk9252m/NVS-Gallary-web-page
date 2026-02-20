function openEvent(eventName) {
  localStorage.setItem("event", eventName);
  window.location.href = "event.html";
}

function openAnnualDay(AnnualDay) {
  localStorage.setItem("Annual Day", AnnualDay);
  window.location.href = "event/Annual Day/event.html";
}


function openvishalgarhTour(vishalgarhTour) {
  localStorage.setItem("vishalgarhTour", vishalgarhTour);
  window.location.href = "event/Vishalgarh-tour/event.html";
}

function openVishalgarhPhotos() {
  window.location.href = "/event/Vishalgarh-tour/photos.html";
}

function openPhotos() {
  window.location.href = "/photos.html";
}

function openVideos() {
  window.location.href = "/videos.html";
}

// function downloadImage(btn) {
//   const img = btn.closest('.photo-card').querySelector('img');
//   const link = document.createElement('a');
//   link.href = img.src;
//   link.download = "photo.jpg";
//   link.click();
// }

function downloadImage(imagePath) {
  const link = document.createElement("a");
  link.href = imagePath;
  link.download = imagePath.split("/").pop(); // original filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("downloadBtn").addEventListener("click", () => {
  downloadImage("/images/logo.png");
});


function addFavorite() {
  alert("Added to favorites ❤️");
}

document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const img = this.closest(".photo-card").querySelector("img");
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "image.jpg";
    link.click();
  });
});

// Favorite Toggle
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
