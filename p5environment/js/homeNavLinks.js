const categoryOne = document.getElementById("category1");
const categoryTwo = document.getElementById("category2");
const categoryThree = document.getElementById("category3");
const categoryFour = document.getElementById("category4");

categoryOne.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="sketches/labyrinth.html">Labyrinth</a></li>
      <li><a href="sketches/rectangleTrail.html">Rectangle Trail</a></li>
      <li><a href="sketches/circleTrail.html">Circle Trail</a></li>
      <li><a href="sketches/dotIllusion.html">Dot Illusion</a></li>
      <li><a href="sketches/ballSort.html">Ball Sort</a></li>
    </ul>
  `);
});

categoryTwo.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="sketches/invertFilter.html">Invert Filter</a></li>
      <li><a href="sketches/pixelSorter.html">Pixel Sorter</a></li>
      <li><a href="sketches/dithering.html">Dithering</a></li>
    </ul>
  `);
});

categoryThree.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="sketches/fractalTree.html">Fractal Tree</a></li>
    </ul>
  `);
});

categoryFour.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="sketches/textGenerator.html">Text Generator</a></li>
      <li><a href="sketches/gameOfLife.html">Game Of Life</a></li>
      <li><a href="sketches/gameOfLifePopulation.html">Game Of Life (population)</a></li>
    </ul>
  `);
});