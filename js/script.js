//SMOOTH SCROLLING

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//POPUP
document
  .querySelector("#popup-open-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });
document
  .querySelector(".popup .popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

//BUTTON DOWN for MORE CONTENT ABOUT

const btnMoreContentAbout = document.querySelector(".btn-more-content-about");
const textReadMoreAbout = document.querySelector(".about-read-more");
const wrapperAbout = document.querySelector(".about-wrapper");

wrapperAbout.addEventListener("click", (e) => {
  const current = e.target;

  const isBtnMoreContentAbout = current.className.includes(
    "btn-more-content-about"
  );

  if (!isBtnMoreContentAbout) return;

  const currentText = e.target.parentNode.querySelector(".about-read-more");
  currentText.classList.toggle("about-read-more-open");
  current.innerHTML = current.innerHTML.includes("Więcej")
    ? "Mniej &uarr;"
    : "Więcej &darr;";
});

//BUTTON DOWN for MORE CONTENT STAFF
//READ MORE / READ LESS button
let more = document.querySelectorAll(".more");

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}

//SWIPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
  },
});

//BUTTON DOWN for MORE CONTENT OFFER in ZLOBEK
const btnMoreContentOffer = document.querySelector(".btn-more-content-offer");
const textReadMoreOffer = document.querySelector(".offer-read-more");
const wrapperOffer = document.querySelector(".offer-wrapper");

if (wrapperOffer) {
  wrapperOffer.addEventListener("click", (e) => {
    const current = e.target;

    const isBtnMoreContentOffer = current.className.includes(
      "btn-more-content-offer"
    );

    if (!isBtnMoreContentOffer) return;

    const currentText = e.target.parentNode.querySelector(".offer-read-more");
    currentText.classList.toggle("offer-read-more-open");
    current.innerHTML = current.innerHTML.includes("Więcej")
      ? "Mniej &uarr;"
      : "Więcej &darr;";
  });
}

//BUTTON DOWN for MORE CONTENT OFFER in PRZEDSZKOLE
const btnMoreContentOfferPrzedszkole = document.querySelector(
  ".btn-more-content-offer-przedszkole"
);
const textReadMoreOfferPrzedszkole = document.querySelector(
  ".offer-read-more-przedszkole"
);
const wrapperOfferPrzedszkole = document.querySelector(
  ".offer-wrapper-przedszkole"
);

if (wrapperOfferPrzedszkole) {
  wrapperOfferPrzedszkole.addEventListener("click", (e) => {
    const current = e.target;

    const isBtnMoreContentOffer = current.className.includes(
      "btn-more-content-offer-przedszkole"
    );

    if (!isBtnMoreContentOffer) return;

    const currentText = e.target.parentNode.querySelector(
      ".offer-read-more-przedszkole"
    );
    currentText.classList.toggle("offer-read-more-open-przedszkole");
    current.innerHTML = current.innerHTML.includes("Więcej")
      ? "Mniej &uarr;"
      : "Więcej &darr;";
  });
}

//BUTTON DOWN for MORE CONTENT PRIVACY-POLICY
const btnMoreContentPrivacyPolicy = document.querySelector(
  ".btn-more-content-privacy-policy"
);
const textReadMorePrivacyPolicy = document.querySelector(
  ".privacy-policy-read-more"
);
const wrapperPrivacyPolicy = document.querySelector(".privacy-policy-text");

wrapperPrivacyPolicy.addEventListener("click", (e) => {
  const current = e.target;

  const isBtnMoreContentPrivacyPolicy = current.className.includes(
    "btn-more-content-privacy-policy"
  );

  if (!isBtnMoreContentPrivacyPolicy) return;

  const currentText = e.target.parentNode.querySelector(
    ".privacy-policy-read-more"
  );
  currentText.classList.toggle("privacy-policy-read-more-open");
  current.innerHTML = current.innerHTML.includes("Więcej")
    ? "Mniej &uarr;"
    : "Więcej &darr;";
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
