function generateBlocks() {
    for (let i=1; i<=25;i++){
    let square = document.createElement('div');
    square.className = 'square';
    document.body.appendChild(square);
    setInterval(() => {
    square.style.backgroundColor = randColor()
    },1000)
}
}  
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
generateBlocks();