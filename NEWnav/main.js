const nav = document.querySelector(".navigation");
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");

document.getElementById("openNavArrow").addEventListener("click", function () {
  nav.classList.toggle("open");

  // If nav just closed, wait before resetting animation & clearing content
  if (!nav.classList.contains("open")) {
    setTimeout(() => {
      column1.classList.remove("slide-start");
      column2.innerHTML = "";
    }, 500); // 500ms delay matches the nav transition duration
  }
});

const categoryOne = document.getElementById("category1");
const categoryTwo = document.getElementById("category2");

function slideColumn1() {
  column1.classList.add("slide-start");
}

function setColumn2Content(html) {
  column2.innerHTML = html;
  const ul = column2.querySelector("ul");
  if (!ul) return;

  ul.classList.remove("animate");
  void ul.offsetWidth; // trigger reflow
  ul.classList.add("animate");
}

categoryOne.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="#">purr</a></li>
      <li><a href="#">nap</a></li>
    </ul>
  `);
});

categoryTwo.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="#">bark</a></li>
      <li><a href="#">fetch</a></li>
    </ul>
  `);
});
