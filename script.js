// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Sidebar open/close
  const openBtn = document.querySelector(".sidebar-toggle");
  const closeBtn = document.querySelector(".close-sidebar");

  if (openBtn) {
    openBtn.onclick = () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    };
  }

  if (closeBtn) {
    closeBtn.onclick = () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    };
  }

  if (overlay) {
    overlay.onclick = () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    };
  }

  // Switch main sections from sidebar
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const sections = document.querySelectorAll(".content-section");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const target = item.dataset.section;
      sections.forEach((s) => s.classList.remove("active"));
      const section = document.getElementById(target);
      if (section) section.classList.add("active");

      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Tabs (Home Rent/Work + Explore Social/Casual)
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      const parentSection = btn.closest(".content-section");

      parentSection
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      parentSection
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      const content = parentSection.querySelector("#" + tabName);
      if (content) content.classList.add("active");
    });
  });

  // Explore search small animation
  const exploreSearch = document.getElementById("exploreSearch");
  if (exploreSearch) {
    exploreSearch.addEventListener("input", () => {
      exploreSearch.style.transform = "scale(1.01)";
      setTimeout(() => {
        exploreSearch.style.transform = "scale(1)";
      }, 80);
    });
  }

  // Charts search small animation
  const chartsSearch = document.getElementById("chartsSearch");
  if (chartsSearch) {
    chartsSearch.addEventListener("input", () => {
      chartsSearch.style.transform = "scale(1.01)";
      setTimeout(() => {
        chartsSearch.style.transform = "scale(1)";
      }, 80);
    });
  }

  // Profile buttons (simple alerts for now)
  const rentBtn = document.querySelector("#profile .primary-btn");
  const followBtn = document.querySelector("#profile .outline-btn");

  if (rentBtn) {
    rentBtn.onclick = () => alert("Rent request feature will be added later.");
  }

  if (followBtn) {
    followBtn.onclick = () => alert("You are now following this member.");
  }

  // Top Chat button: open Messages section
  const chatTopBtn = document.querySelector(".chat-btn");
  if (chatTopBtn) {
    chatTopBtn.onclick = () => {
      // set sidebar active item
      sidebarItems.forEach((i) => i.classList.remove("active"));
      const msgItem = Array.from(sidebarItems).find(
        (i) => i.dataset.section === "messages"
      );
      if (msgItem) msgItem.classList.add("active");

      // show messages section
      sections.forEach((s) => s.classList.remove("active"));
      const msgSection = document.getElementById("messages");
      if (msgSection) msgSection.classList.add("active");
    };
  }
});
