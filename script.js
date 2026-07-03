(function () {
  "use strict";

  /* ---------- 1) Header theme toggle (visual only) ---------- */
  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var pressed = themeToggle.getAttribute("aria-pressed") === "true";
      themeToggle.setAttribute("aria-pressed", String(!pressed));
      themeToggle.classList.toggle("is-active", !pressed);
    });
  }

  /* ---------- 2) 학습 혜택 side panel: click to switch active item within its group ---------- */
  document.querySelectorAll(".side-group").forEach(function (group) {
    var items = group.querySelectorAll(".side-item");
    items.forEach(function (item) {
      item.addEventListener("click", function () {
        items.forEach(function (el) { el.classList.remove("is-active"); });
        item.classList.add("is-active");
      });
    });
  });

  /* ---------- 3) Sketch carousel controls ---------- */
  var track = document.getElementById("sketchTrack");
  var prevBtn = document.getElementById("sketchPrev");
  var nextBtn = document.getElementById("sketchNext");
  if (track && prevBtn && nextBtn) {
    var scrollByAmount = function () {
      var slide = track.querySelector(".slide");
      var gap = 16;
      return slide ? slide.getBoundingClientRect().width + gap : 300;
    };
    prevBtn.addEventListener("click", function () {
      track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
    });
    nextBtn.addEventListener("click", function () {
      track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
    });
  }

  /* ---------- 4) FAQ tabs ---------- */
  var faqTabs = document.querySelectorAll(".faq-tab");
  faqTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      faqTabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
    });
  });

  /* ---------- 5) FAQ accordion ---------- */
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var answer = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", String(!expanded));
      if (answer) {
        if (expanded) {
          answer.setAttribute("hidden", "");
        } else {
          answer.removeAttribute("hidden");
        }
      }
    });
  });
})();
