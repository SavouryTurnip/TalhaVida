let dropsButtons = document.querySelectorAll(".drop-icon");

dropsButtons.forEach((d) => {
  d.addEventListener("click", () => {
    dropsButtons.forEach((de) => {
      de.querySelector(".hover-list").classList.remove("active");
    });
    d.querySelector(".hover-list").classList.toggle("active");
  });
});

var drops = document.querySelectorAll(".drop");
drops.forEach((drop) => {
  drop.addEventListener("mouseover", myFunction);
  function myFunction() {
    var grad = document.querySelector(".main-gradient");
    grad.classList.toggle("darken");
  }
  drop.addEventListener("mouseout", myFunction2);
  function myFunction2() {
    var grad = document.querySelector(".main-gradient");
    grad.classList.toggle("darken");
  }
});
