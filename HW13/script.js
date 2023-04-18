 const btnInc = document.getElementById("btnInc");
 const btnDec = document.getElementById("btnDec");

const element = document.querySelector("p");
const styles = window.getComputedStyle(element);
let fontSize = parseFloat(styles.getPropertyValue('font-size'));
console.log(fontSize); 

function* infitiniteGenerator1(){
  // let initialID = 14;
  for (let i = 0; i < Infinity; i++) {
    fontSize +=1;
    yield fontSize;
  }
}
const idGenerator1 = infitiniteGenerator1();

//const btnInc = document.querySelector("button");

btnInc.addEventListener("click", () => {
  //infitiniteGenerator.next();
  idGenerator1.next();
  let value = idGenerator1.next().value;
  const text = document.querySelector("p")
  text.style.fontSize = value+"px";
  console.log(idGenerator1.next().value);
});



// btnDec.addEventListener("click", () => {
//   //infitiniteGenerator.next();
//   idGenerator1;
//   let value = idGenerator1.value;
//   const text = document.querySelector("p")
//   text.style.fontSize = (value-2)+"px";
//   //console.log(idGenerator1.next().value);
// });
function* infitiniteGenerator2(){

  for (let i = fontSize; i >0; i++) {
    fontSize -=1;
    //console.log(fontSize);
    yield fontSize;
  }
}
const idGenerator2 = infitiniteGenerator2();

//const btnInc = document.querySelector("button");

btnDec.addEventListener("click", () => {
  //infitiniteGenerator.next();
  idGenerator2.next();
  let value = idGenerator2.next().value;
  const text = document.querySelector("p")
  text.style.fontSize = value+"px";
  console.log(idGenerator2.next().value);
});