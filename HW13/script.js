 const btnInc = document.getElementById("btnInc");
 const btnDec = document.getElementById("btnDec");


function* infitiniteGenerator1(){
  let initialID = 14;
  for (let i = 0; i < Infinity; i++) {
    initialID +=2;
    yield initialID;
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

// function* infitiniteGenerator2(){
//   let initialID=14;

//   for (let i = 0; i < 2; i++) {
//     initialID -=2;
//     yield initialID;
//   }
// }
// const idGenerator2 = infitiniteGenerator2();

// //const btnInc = document.querySelector("button");

// btnDec.addEventListener("click", () => {
//   //infitiniteGenerator.next();
//   idGenerator2.next();
//   let value = idGenerator2.next().value;
//   const text = document.querySelector("p")
//   text.style.fontSize = value+"px";
//   console.log(idGenerator2.next().value);
// });