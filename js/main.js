AOS.init({
  duration: 1000,
  once: true
});

// Glide slider
new Glide('.glide', {
  type: 'carousel',
  perView: 1,
  autoplay: 2500
}).mount();

// GLightbox
const lightbox = GLightbox({
  selector: '.glightbox'
});

// Leaflet map
const map = L.map('map').setView([13.7563, 100.5018], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([13.7563, 100.5018])
  .addTo(map)
  .bindPopup('Bangkok, Thailand')
  .openPopup();