function getRandomChinese(length) {
//new Promise((resolve, reject)=>{
let i=0;
let result ='';
while (i<length){
    
  function getRandomNumber() {
    const number = String.fromCharCode(Date.now()).slice(-5);
    console.log(number);
    result+=number
    i++
    // if (i===length){
    //     resolve(result)
    // } else {
    //     //setTimeout(getRandomNumber, 50);
    // }

  }

getRandomNumber(); 
};
}
getRandomChinese(4)
// .then(result => {
//     console.log(result);
//   }).catch(error => {
//     console.error(error);
//   });


/*
function getRandomChinese(length) {
  let result = '';
  let i = 0;

  const generateCharacter = () => {
    return new Promise((resolve) => {
      const sign = String(Date.now()).slice(-5);
      const character = String.fromCharCode(sign);
      setTimeout(() => {
        resolve(character);
      }, 50);
    });
  };

  while (i < length) {
    result += generateCharacter();
    i++;
  }

  return Promise.all(result).then((result) => result.join(''));
}
*/

// const number = String.fromCharCode(Math.floor(Math.random() * (40959 - 19968 + 1) + 19968));
