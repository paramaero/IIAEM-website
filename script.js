const search = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const filter = document.getElementById("categoryFilter");
const toggle = document.getElementById("darkToggle");

search.addEventListener("keyup", () => {
  let val = search.value.toLowerCase();
  cards.forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(val) ? "block" : "none";
  });
});

filter.addEventListener("change", () => {
  let val = filter.value;
  cards.forEach(c => {
    c.style.display = (val === "all" || c.classList.contains(val)) ? "block" : "none";
  });
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
