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
getAllChatacters();

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
      console.log(characters);
      let charactersByName = [];

      for (let i = 0; i < characters.length; i++) {
        let characterURL = characters[i];
        fetch(characterURL)
          .then((res) => res.json())
          .then((character) => {
            charactersByName.push([character.name, character.birth_year, character.gender]);
            // charactersByName={
            //     name:character.name
            // }
          });
      }
      setTimeout(() => {
        console.log(charactersByName);
      }, 500);
    });
}
getFilmsCharacters(2);


