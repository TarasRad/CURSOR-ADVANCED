// function getRandomChinese(length) {
// new Promise((resolve, reject)=>{
// let i=0;
// let result ='';
// // const date = Date.now()
// //     console.log(date);

// while (i<length){
    
//   function getRandomNumber() {
//     const number = String.fromCharCode(Date.now()).slice(-5);
//     //console.log(number);
//     //console.log(Date.now());
//     console.log(String.fromCharCode(Date.now()));

//     result+=number
//     i++
//     if (i===length){
//   resolve(result)
//     } else {
//         setTimeout(getRandomNumber,50)
//     }

//   }

// getRandomNumber(); 
// }
// })

// }

function getRandomChinese(length) {
    return new Promise((resolve)=>{
    let i=0;
    let result ='';   
      function getRandomNumber() {
        const number = String.fromCharCode(Date.now()).slice(-5);
        console.log(number);
        result+=number
        i++
        if (i===length){
      resolve(result)
        } else {
            setTimeout(getRandomNumber,1000)
        }
    
      }
    
    getRandomNumber(); 
    
    })
    
    }
    getRandomChinese(4).then((result) => console.log(result));
    // console.log(Date.now());
    // console.log(Date.now());
