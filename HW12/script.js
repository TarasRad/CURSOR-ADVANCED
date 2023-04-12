function getPerson({ name }) {
  console.log(name);
}

function getFilms() {
  fetch("https://swapi.dev/api/films/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log({ data });
      let infoDiv =  document.createElement("div");
      let infoList = document.createElement("span");
      infoDiv.append(infoList);
      infoList.innerHTML += `${data}`
    });
}
getFilms();

function getAllChatacters() {
  const peopleUrl = "https://swapi.dev/api/people/";
  const allPleople = [];
  function getCharacters(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allPleople.push(...data.results);
        if (data.next) {
          getCharacters(data.next);
        } else {
          console.log(allPleople);
        }
      });
  }
  getCharacters(peopleUrl);
}
//getAllChatacters();

function getFilmsCharacters(film) {
   
  const filmsApi = "https://swapi.dev/api/films/";
  let newUrl = filmsApi + film;
  console.log("NEW URL", newUrl);
  fetch(newUrl)
    .then((res) => {
      return res.json();
    })
    .then((film) => {
      console.log(film.title);
      
      const characters = film.characters;
      //console.log(characters);
      let charactersByName = {};
      
      for (let i = 0; i < characters.length; i++) {
        let characterURL = characters[i];
        fetch(characterURL)
          .then((res) => res.json())
          .then((character) => {
            
            charactersByName[character.name] = {
                birthYear: character.birth_year,
                gender: character.gender
              };

          });
      }

      setTimeout(() => {

        let charactersList = document.createElement("ul");
        for (const [name, info] of Object.entries(charactersByName)) {
          listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${name}</strong> (Date: ${info.birthYear}, Gender: ${info.gender})`;
          charactersList.appendChild(listItem);
        }
        document.body.appendChild(charactersList);
      }, 500);
    });

}
//getFilmsCharacters();

const filmInput = document.getElementById("filmInput");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {

  let film = filmInput.value;

  getFilmsCharacters(film);

});

window.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    console.log(key);
        if(key==='enter'){
            let film = filmInput.value;

            getFilmsCharacters(film);
        }
})



// const div = document.createElement("div");
// const nameInfo = document.createElement("h2");
// const birthInfo = document.createElement("span");
// const genderInfo  = document.createElement("span");
// nameInfo.textContent = charactersByName.name;
// div.append(nameInfo);
// document.body.append(div);