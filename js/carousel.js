document.addEventListener("DOMContentLoaded", function () {
  const sections = Array.from(
    document.querySelectorAll(".game-contents-section")
  );
  const nextBtn = document.querySelector(".pagination__next");
  const prevBtn = document.querySelector(".pagination__prev");
  const currentPageSpan = document.querySelector(".current-page");
  const sectionsPerPage = 2;
  const totalPage = Math.ceil(sections.length / sectionsPerPage);
  let currentPage = 1;

  function showPage(page) {
    sections.forEach((section, idx) => {
      const start = (page - 1) * sectionsPerPage;
      const end = start + sectionsPerPage;
      section.style.display = idx >= start && idx < end ? "block" : "none";
    });
    currentPageSpan.textContent = page;
  }

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPage) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
