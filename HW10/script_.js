const key = document.querySelectorAll(".keys");
for (let i=0; i<key.length;i++){
    key[i].addEventListener("click"||'keydown', function(event){
        if(event.isComposing || event.keyCode === 65){
            console.log("type a 65");

        }
        console.log("type A");

    });

}




// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//       alert('Отменить!')
//     }
//   });










// key.addEventListener("click", function () {
//     console.log("click");
//   });
// const element = document.getElementById("key1");
// element.addEventListener("click"||"keydown", function() {
    
//     console.log('click');
// });
// document.eventTarget.addEventListener("keydown", (event) => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     console.log('click');
//     // do something
//   });
