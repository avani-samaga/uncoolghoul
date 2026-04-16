// ==========================
// GLOBAL IMAGE VIEWER SYSTEM
// ==========================

let viewerImages = [];
let currentIndex = 0;

function openViewer(images, index) {
  currentList = list;
  currentIndex = index;

  document.querySelector(".viewer")?.remove();

  const viewer = document.createElement("div");
  viewer.className = "viewer";

  const inner = document.createElement("div");
  inner.className = "viewer-inner";

  const img = document.createElement("img");
  img.src = currentList[currentIndex].src;

  const controls = document.createElement("div");
  controls.className = "controls";
  controls.innerHTML = `
    <span id="back">(back)</span>
    <span id="next">(next)</span>
    <span id="close">(close)</span>
  `;

  inner.appendChild(controls);
  inner.appendChild(img);
  viewer.appendChild(inner);
  document.body.appendChild(viewer);

  

}

function closeViewer() {
  document.getElementById("viewerOverlay").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % viewerImages.length;
  document.getElementById("viewerImage").src = viewerImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + viewerImages.length) % viewerImages.length;
  document.getElementById("viewerImage").src = viewerImages[currentIndex];
}

// attach click handlers to any .clickable-image
function initViewer() {
  document.querySelectorAll(".clickable-image").forEach((img, index, arr) => {
    const sources = Array.from(arr).map(i => i.src);

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      openViewer(sources, index);
    });
  });
}

// init on load
document.addEventListener("DOMContentLoaded", initViewer);