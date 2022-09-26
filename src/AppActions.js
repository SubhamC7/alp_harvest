export const reveal = () => {
  var elements1 = document.querySelectorAll(".holder1");

  elements1.forEach((element) => {
    var top = element.getBoundingClientRect().top;
    if (top < window.innerHeight - 70) {
      element.classList.add("fadeInUp");
    }
  });
  var elements2 = document.querySelectorAll(".holder2");

  elements2.forEach((element) => {
    var top = element.getBoundingClientRect().top;
    if (top < window.innerHeight - 70) {
      element.classList.add("fadeLeft");
    }
  });
  var elements3 = document.querySelectorAll(".holder3");

  elements3.forEach((element) => {
    var top = element.getBoundingClientRect().top;
    if (top < window.innerHeight - 70) {
      element.classList.add("fadeRight");
    }
  });
};
