function getPeople(name){
console.log(name);
}


function getInfo(){
fetch("https://swapi.dev/api/films/").then((res)=>{
return res.json();
}).then(data=> {
    console.log({data});
})
}
getInfo()


function getChatacters(){
    fetch("https://swapi.dev/api/people/").then((res)=>{
    return res.json();
    }).then(people=> {
        console.log({people});
        getPeople()

    })
    }
    getChatacters()
