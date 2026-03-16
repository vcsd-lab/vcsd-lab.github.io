document.addEventListener("DOMContentLoaded", () => {
  console.log("publications.js loaded");

  const listContainer = document.querySelector("#section-collection .flex.flex-col.space-y-3");
  if (!listContainer) {
    console.log("listContainer not found");
    return;
  }

  const items = Array.from(listContainer.querySelectorAll(".pub-list-item.view-citation"));
  if (!items.length) {
    console.log("publication items not found");
    return;
  }

  let currentFilter = "all";
  let currentSort = "desc";

  function getTypeFromItem(item) {
    const titleLink = item.querySelector('a[href*="/publications/"]');
    if (!titleLink) return "unknown";

    const href = titleLink.getAttribute("href") || "";
    if (href.includes("/publications/journal/")) return "journal";
    if (href.includes("/publications/conference/")) return "conference";
    if (href.includes("/publications/preprint/")) return "preprint";
    if (href.includes("/publications/report/")) return "report";
    if (href.includes("/publications/book/")) return "book";
    return "unknown";
  }

  function getYearFromItem(item) {
    const text = item.textContent || "";
    const match = text.match(/\((\d{4})\)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  function applyFilter() {
    items.forEach((item) => {
      const type = getTypeFromItem(item);
      const visible = currentFilter === "all" || type === currentFilter;
      item.style.display = visible ? "" : "none";
    });
  }

  function applySort() {
    const sorted = [...items].sort((a, b) => {
      const yearA = getYearFromItem(a);
      const yearB = getYearFromItem(b);
      return currentSort === "asc" ? yearA - yearB : yearB - yearA;
    });

    sorted.forEach((item) => listContainer.appendChild(item));
  }

  function setActiveButton(selector, value, attr) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute(attr) === value);
    });
  }

  document.querySelectorAll(".pub-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter") || "all";
      setActiveButton(".pub-filter-btn", currentFilter, "data-filter");
      applyFilter();
    });
  });

  document.querySelectorAll(".pub-sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSort = btn.getAttribute("data-sort") || "desc";
      setActiveButton(".pub-sort-btn", currentSort, "data-sort");
      applySort();
      applyFilter();
    });
  });

  applySort();
  applyFilter();
});
