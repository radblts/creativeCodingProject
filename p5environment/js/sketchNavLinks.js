const categoryOne = document.getElementById("category1");
const categoryTwo = document.getElementById("category2");
const categoryThree = document.getElementById("category3");
const categoryFour = document.getElementById("category4");

categoryOne.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="labyrinth.html">Labyrinth</a></li>
      <li><a href="rectangleTrail.html">Rectangle Trail</a></li>
      <li><a href="circleTrail.html">Circle Trail</a></li>
      <li><a href="dotIllusion.html">Dot Illusion</a></li>
      <li><a href="ballSort.html">Ball Sort</a></li>
      <li><a href="switchstate.html">Switchstate</a></li>
      <li><a href="snakeTrail.html">Snake Trail</a></li>
      <li><a href="pendulum.html">Pendulum</a></li>
    </ul>
  `);
});

categoryTwo.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="invertFilter.html">Invert Filter</a></li>
      <li><a href="pixelSorter.html">Pixel Sorter</a></li>
      <li><a href="dithering.html">Dithering</a></li>
      <li><a href="glitchEffect.html">Glitch Effect</a></li>
      <li><a href="imgCombiner.html">Image Combiner</a></li>
    </ul>
  `);
});

categoryThree.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="fractalTree.html">Fractal Tree</a></li>
      <li><a href="kochSnowflake.html">Koch Snowflake</a></li>
      <li><a href="sierpinskiTriangle.html">Sierpinski Triangle</a></li>
      <li><a href="dragonCurve.html">Dragon Curve</a></li>
    </ul>
  `);
});

categoryFour.addEventListener("click", function () {
  slideColumn1();
  setColumn2Content(`
    <ul>
      <li><a href="textGenerator.html">Text Generator</a></li>
      <li><a href="gameOfLife.html">Game Of Life</a></li>
      <li><a href="gameOfLifePopulation.html">Game Of Life (population)</a></li>
    </ul>
  `);
});