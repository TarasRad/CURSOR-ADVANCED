const btnInc = document.querySelector("btn");

function* infitiniteGenerator(initialFontSize) {
  let initialFZ = initialFontSize;
  for (let i = 0; i < Infinity; i++) {
    const ourValue = yield;

    if (ourValue === "up") {
      initialFZ += 2;
    }
  }
}

const idGenerator = infitiniteGenerator();
idGenerator.next();

btnInc.addEventListener("click", () => {
  infitiniteGenerator.next("up");
});