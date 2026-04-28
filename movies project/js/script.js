const IMG = "https://image.tmdb.org/t/p/w500";

const defaultMovies = [
  {title:"Inception", image: IMG + "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
  {title:"Interstellar", image: IMG + "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
  {title:"Avengers", image: IMG + "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"},
  {title:"Joker", image: IMG + "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
  {title:"Titanic", image: IMG + "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"}
];

let movies = JSON.parse(localStorage.getItem("movies"));
let library = JSON.parse(localStorage.getItem("library")) || [];

if(!movies || movies.length === 0){
  movies = defaultMovies;
  saveMovies();
}

function saveMovies(){
  localStorage.setItem("movies", JSON.stringify(movies));
}

function saveLibrary(){
  localStorage.setItem("library", JSON.stringify(library));
}

function displayHome(){
  const grid = document.getElementById("homeGrid");
  grid.innerHTML = "";

  movies.forEach((movie,index)=>{
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${movie.image}">
      <h3>${movie.title}</h3>
      <button onclick="addToLibrary(${index})">Add to Library</button>
    `;

    grid.appendChild(div);
  });
}

function displayLibrary(){
  const grid = document.getElementById("libraryGrid");
  grid.innerHTML = "";

  library.forEach((movie,index)=>{
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${movie.image}">
      <h3>${movie.title}</h3>
      <button onclick="removeFromLibrary(${index})">Remove</button>
    `;

    grid.appendChild(div);
  });
}

function addMovie(){
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;

  if(title && image){
    movies.push({title,image});
    saveMovies();
    displayHome();

    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
  }
}

function addToLibrary(index){
  library.push(movies[index]);
  saveLibrary();
  alert("Added to Library");
}

function removeFromLibrary(index){
  library.splice(index,1);
  saveLibrary();
  displayLibrary();
}

function showSection(section){
  document.getElementById("homeSection").style.display = section === 'home' ? 'block' : 'none';
  document.getElementById("librarySection").style.display = section === 'library' ? 'block' : 'none';

  if(section === 'library') displayLibrary();
}

// Initial load
displayHome();