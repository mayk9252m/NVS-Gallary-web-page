function openEvent(eventName) {
  localStorage.setItem("event", eventName);
  window.location.href = "event.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("eventTitle");
  if (title) {
    title.innerText = localStorage.getItem("event").replace("-", " ");
  }
});

function openPhotos() {
  window.location.href = "photos.html";
}

function openVideos() {
  window.location.href = "videos.html";
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
  downloadImage("images/logo.png");
});


function addFavorite() {
  alert("Added to favorites ❤️");
}
