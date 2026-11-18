// Click-to-zoom for images in the main content.
// Click an image to open it full view; click anywhere or press Esc to close.

const overlay = document.createElement("div");
overlay.className = "lightbox";
overlay.innerHTML = '<img alt=""><p class="lightbox-caption"></p>';
document.body.appendChild(overlay);

const bigImg = overlay.querySelector("img");
const caption = overlay.querySelector(".lightbox-caption");

function closeLightbox() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll("main img:not(.logo)").forEach((img) => {
  img.classList.add("zoomable");
  img.addEventListener("click", () => {
    bigImg.src = img.src;
    bigImg.alt = img.alt;
    caption.textContent = img.alt;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden"; // stop page scrolling behind it
  });
});

overlay.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
