"use strict";

console.log("Script loaded!");

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
console.log("sidebar:", sidebar, "sidebarBtn:", sidebarBtn);
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
console.log(
  "testimonialsItem:",
  testimonialsItem,
  "modalContainer:",
  modalContainer,
  "modalCloseBtn:",
  modalCloseBtn,
  "overlay:",
  overlay
);
if (modalContainer && modalCloseBtn && overlay && testimonialsItem.length) {
  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");
  console.log(
    "modalImg:",
    modalImg,
    "modalTitle:",
    modalTitle,
    "modalText:",
    modalText
  );

  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector(
        "[data-testimonials-title]"
      ).innerHTML;
      modalText.innerHTML = this.querySelector(
        "[data-testimonials-text]"
      ).innerHTML;

      testimonialsModalFunc();
    });
  }

  // add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
console.log(
  "select:",
  select,
  "selectItems:",
  selectItems,
  "selectValue:",
  selectValue,
  "filterBtn:",
  filterBtn
);
if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}
if (select && selectItems.length && selectValue) {
  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
console.log("filterItems:", filterItems);

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

if (filterBtn.length && selectValue) {
  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
console.log("form:", form, "formInputs:", formInputs, "formBtn:", formBtn);
if (form && formInputs.length && formBtn) {
  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
console.log("navigationLinks:", navigationLinks, "pages:", pages);
if (navigationLinks.length && pages.length) {
  // ---
  // The navigation logic below is dynamic: it will automatically handle any new section (e.g., 'Skills')
  // as long as you add a nav button with data-nav-link and an article with data-page="section-name".
  // No further JS changes are needed for new sections with matching data attributes.
  // ---

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      debugger; // Debugger will pause execution here
      console.log("Button clicked:", this.innerHTML);
      console.log("Button text (lowercase):", this.innerHTML.toLowerCase());
      console.log("Total pages found:", pages.length);

      for (let j = 0; j < pages.length; j++) {
        console.log(`Page ${j}:`, pages[j].dataset.page);
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          console.log("MATCH FOUND! Activating page:", pages[j].dataset.page);
          pages[j].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          console.log("No match, removing active from:", pages[j].dataset.page);
          pages[j].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    });
  }
}
