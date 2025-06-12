const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const sideNav = document.getElementsByClassName("sideNav")[0];

console.log(toggleBtn);
console.log(sideNav);

toggleBtn.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});
