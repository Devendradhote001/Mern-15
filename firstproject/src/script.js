let count = 0;

let p = document.querySelector("p");

btn.addEventListener("click", () => {
  count++;
  p.textContent = count;
});
