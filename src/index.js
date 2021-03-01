const $addActiveClass = document.querySelectorAll(".col");
const $getContext = document.querySelectorAll(".context-container");

let isActive = false;
$addActiveClass.forEach((context) => {
  context.addEventListener("click", (e) => {
    const class1 = context.querySelectorAll(".context-container");

    if (!isActive) {
      isActive = true;

      class1.forEach((index) => {
        index.classList.add("active");
      });
    } else {
      isActive = false;
      class1.forEach((index) => {
        index.classList.remove("active");
      });
    }
  });
});
