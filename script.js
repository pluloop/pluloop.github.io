const img = document.getElementById("infopage");
const plan = document.getElementById("plan");

plan.addEventListener("mouseover", () => {
  img.style.display = "inline-block";
});

plan.addEventListener("mouseleave", () => {
  img.style.display = "none";
});
