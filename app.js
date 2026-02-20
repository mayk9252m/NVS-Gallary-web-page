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

function openAnnualDayPhotos() {
  window.location.href = "/event/Annual Day/photos.html";
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

document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const img = this.closest(".photo-card").querySelector("img");
    
    const link = document.createElement("a");
    link.href = img.src;
    link.download = img.src.split("/").pop();
    link.click();
  });
});



    // Function to handle the "Download All" action
    function downloadAllFiles() {
        const fileList = document.getElementById('file-list');
        const links = fileList.querySelectorAll('a');

        links.forEach(link => {
            // Create a temporary anchor element and click it programmatically
            const tempLink = document.createElement('a');
            tempLink.href = link.href;
            tempLink.download = link.download; // Use the filename from the original link
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });
    }

    // Attach the downloadAllFiles function to the main button's click event
    document.querySelector('.download-all-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        downloadAllFiles();
    });
