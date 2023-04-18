 const btnInc = document.getElementById("btnInc");
 const btnDec = document.getElementById("btnDec");

const element = document.querySelector("p");
const styles = window.getComputedStyle(element);
let fontSize = parseFloat(styles.getPropertyValue('font-size'));
console.log(fontSize); 

function* infitiniteGenerator1(){
  for (let i = 0; i < Infinity; i++) {
    fontSize +=1;
    yield fontSize;
  }
}
const idGenerator1 = infitiniteGenerator1();


btnInc.addEventListener("click", () => {
  //idGenerator1.next();
  let value = idGenerator1.next().value;
  const text = document.querySelector("p")
  text.style.fontSize = value+"px";
  console.log(idGenerator1.next().value);
});




function* infitiniteGenerator2(){

  for (let i = fontSize; i >0; i--) {
    fontSize -=1;
    yield fontSize;
  }
}
const idGenerator2 = infitiniteGenerator2();


btnDec.addEventListener("click", () => {
  //idGenerator2.next();
  let value = idGenerator2.next().value;
  const text = document.querySelector("p")
  text.style.fontSize = value+"px";
  console.log(idGenerator2.next().value);
});