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

    for (let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function(){
            //console.log(this);
            if (this===buttons[0]){
                console.log('key A');
                document.getElementById('audioA').play();
            } else if (this===buttons[1]){
                console.log('key S');
                document.getElementById('audioS').play();
            } else if (this===buttons[2]){
                console.log('key D');
                document.getElementById('audioD').play();
            } else if (this===buttons[3]){
                console.log('key F');
                document.getElementById('audioF').play();
            } else if (this===buttons[4]){
                console.log('key G');
                document.getElementById('audioG').play();
            } else if (this===buttons[5]){
                console.log('key H');
                document.getElementById('audioH').play();
            } else if (this===buttons[6]){
                console.log('key J');
                document.getElementById('audioJ').play();
            } else if (this===buttons[7]){
                console.log('key K');
                document.getElementById('audioK').play();
            } else if (this===buttons[8]){
                console.log('key L');
                document.getElementById('audioL').play();
            }

        })
    }



window.addEventListener("keyup", function(){
   
    for (let i=0;i<buttons.length;i++){
        buttons[i].style.backgroundColor='';
        
    }
})


