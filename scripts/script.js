const btn_toggler = document.querySelector("#btn-toggler");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo-nav");

let open = false;
btn_toggler.addEventListener("click", function () {
  if (open === false) {
    document.getElementById("hamburger").src = "images/icon-close.svg";
    nav.style.background = "#252b46";
    logo.style.filter = "brightness(0) invert(1)";
    nav.style.height = "100vh";
    nav.style.alignItems = "flex-start";
    open = true;
  } else {
    document.getElementById("hamburger").src = "images/icon-hamburger.svg";
    nav.style.background = "white";
    logo.style.filter = "brightness(1) invert(0)";
    nav.style.height = "";
    open = false;
  }
});

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
