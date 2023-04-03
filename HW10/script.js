const buttons = document.querySelectorAll(".keys");
window.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    console.log(key);
    for (let i=0;i<buttons.length;i++){
        if(key==='a'){
            buttons[0].style.backgroundColor='red';
            document.getElementById('audioA').play();
            console.log('A');
        } else if(key==='s'){
            buttons[1].style.backgroundColor='red';
            document.getElementById('audioS').play();
            console.log('S');
        } else if(key==='d'){
            buttons[2].style.backgroundColor='red';
            document.getElementById('audioD').play();
            console.log('D');
        } else if(key==='f'){
            buttons[3].style.backgroundColor='red';
            document.getElementById('audioF').play();
            console.log('F');
        } else if(key==='g'){
            buttons[4].style.backgroundColor='red';
            document.getElementById('audioG').play();
            console.log('G');
        } else if(key==='h'){
            buttons[5].style.backgroundColor='red';
            document.getElementById('audioH').play();
            console.log('H');
        } else if(key==='j'){
            buttons[6].style.backgroundColor='red';
            document.getElementById('audioJ').play();
            console.log('J');
        } else if(key==='k'){
            buttons[7].style.backgroundColor='red';
            document.getElementById('audioK').play();
            console.log('K');
        } else if(key==='l'){
            buttons[8].style.backgroundColor='red';
            document.getElementById('audioL').play();
            console.log('L');
        }
    }
})

    // for (let i=0;i<buttons.length;i++){
    //     buttons[i].addEventListener("click", function(buttons){
    //         const key = buttons[i];

    //         if(buttons[i]){
    //             buttons[i].style.backgroundColor='red';
    //          document.getElementById('audioA').play();
    //         }
    //         console.log('a'); 

    //     })
    // }

//     for (let i=0;i<buttons.length;i++){
//         if(key==='a'){
//             buttons[0].style.backgroundColor='red';
//             document.getElementById('audioA').play();
//             console.log('A');
//         } else if(key==='s'){
//             buttons[1].style.backgroundColor='red';
//             document.getElementById('audioS').play();
//             console.log('S');
//         } else if(key==='d'){
//             buttons[2].style.backgroundColor='red';
//             document.getElementById('audioD').play();
//             console.log('D');
//         } else if(key==='f'){
//             buttons[3].style.backgroundColor='red';
//             document.getElementById('audioF').play();
//             console.log('F');
//         } else if(key==='g'){
//             buttons[4].style.backgroundColor='red';
//             document.getElementById('audioG').play();
//             console.log('G');
//         } else if(key==='h'){
//             buttons[5].style.backgroundColor='red';
//             document.getElementById('audioH').play();
//             console.log('H');
//         } else if(key==='j'){
//             buttons[6].style.backgroundColor='red';
//             document.getElementById('audioJ').play();
//             console.log('J');
//         } else if(key==='k'){
//             buttons[7].style.backgroundColor='red';
//             document.getElementById('audioK').play();
//             console.log('K');
//         } else if(key==='l'){
//             buttons[8].style.backgroundColor='red';
//             document.getElementById('audioL').play();
//             console.log('L');
//         }
//     }
// })

window.addEventListener("keyup", function(){
   
    for (let i=0;i<buttons.length;i++){
        buttons[i].style.backgroundColor='';
        
    }
})
