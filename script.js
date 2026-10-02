/* ============================================================
   KOALESI ADVERTISING — JAVASCRIPT
   File ini mengurus interaksi kecil website.
   Data billboard sengaja dipisahkan di bagian paling atas supaya
   nanti mudah diganti ketika 27 data asli diberikan.
============================================================ */

/*
  DATA BILLBOARD
  ------------------------------------------------------------
  Jangan isi kota/alamat/koordinat berdasarkan tebakan.
  Saat data asli diberikan, array ini akan diganti dengan 27
  lokasi sebenarnya.

  Struktur yang disiapkan:
  {
    id: 1,
    city: "Nama Kota",
    address: "Alamat asli",
    size: "Ukuran asli",
    status: "Info jika tersedia"
  }
*/
const billboardData = [
  {
    id: 1,
    city: "Data lokasi",
    address: "Menunggu data billboard asli",
    size: "—",
    status: "Placeholder"
  }
];

/* ============================================================
   MOBILE MENU
============================================================ */
const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   BILLBOARD LIST + FILTER
   ------------------------------------------------------------
   Saat 27 data asli masuk, daftar kota otomatis dibuat dari data.
============================================================ */
const locationList = document.querySelector("#location-list");
const cityFilter = document.querySelector("#city-filter");
const locationCount = document.querySelector("#location-count");

function uniqueCities(data) {
  return [...new Set(data.map((item) => item.city))].sort();
}

function renderCityFilter(data) {
  if (!cityFilter) return;

  cityFilter.innerHTML = '<option value="all">Semua lokasi</option>';

  uniqueCities(data).forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

function renderLocations(data, selectedCity = "all") {
  if (!locationList) return;

  const filtered = selectedCity === "all"
    ? data
    : data.filter((item) => item.city === selectedCity);

  locationList.innerHTML = "";

  filtered.forEach((item) => {
    const article = document.createElement("article");
    article.className = "location-item";

    article.innerHTML = `
      <span class="location-marker" aria-hidden="true"></span>
      <div>
        <strong>${item.city}</strong>
        <span>${item.address}</span>
      </div>
      <em>${item.size}</em>
    `;

    locationList.appendChild(article);
  });

  if (locationCount) {
    locationCount.textContent = data.length;
  }
}

renderCityFilter(billboardData);
renderLocations(billboardData);

if (cityFilter) {
  cityFilter.addEventListener("change", (event) => {
    renderLocations(billboardData, event.target.value);
  });
}

/* ============================================================
   SMOOTH SCROLL
   ------------------------------------------------------------
   Browser modern sudah menangani smooth scroll dari CSS.
   Tidak perlu library tambahan.
============================================================ */
