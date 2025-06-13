const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const sideNav = document.getElementsByClassName("sideNav")[0];

console.log(toggleBtn);
console.log(sideNav);

toggleBtn.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});

const cardsPerPage = 4; // Number of cards to show per page
const dataContainer = document.getElementById("pagination");
const pagination = document.getElementById("buttonConatainer");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");
const pageLinks = document.querySelectorAll(".page-link");

console.log(dataContainer, "dataContainer");

const cards = Array.from(dataContainer.getElementsByClassName("card"));
console.log(cards);

const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

function displayPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// update pagination function
function updatePagination() {
  pageNumbers.textContent = `Page ${currentPage} of ${totalPages}}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
    updatePagination();
  }
});
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
    updatePagination();
  }
});

pageLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = parseInt(link.getAttribute("data-page"));
    if (page !== currentPage) {
      currentPage = page;
      displayPage(currentPage);
      updatePagination();
    }
  });
});

displayPage(currentPage);
updatePagination();
