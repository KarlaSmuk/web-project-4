console.log("Script 1 loaded");

const gallery = document.getElementById("gallery");

for (let i = 0; i < 21; i++) {
  const img = document.createElement("img");
  img.src = `img/${i}.jpg`;
  img.alt = `Image ${i + 1}`;
  gallery.appendChild(img);
}
