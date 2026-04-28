// Default fashion items
const items = [
  {name:"Casual Dress", image:"https://images.unsplash.com/photo-1520975922284-8b456906c813"},
  {name:"Party Dress", image:"https://images.unsplash.com/photo-1495121605193-b116b5b09a19"},
  {name:"Summer Dress", image:"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"},
  {name:"Black Gown", image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c"},
  {name:"Jeans Pants", image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"},
  {name:"Baggy Pants", image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"},
  {name:"Cargo Pants", image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
  {name:"Formal Pants", image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"}
];

let library = JSON.parse(localStorage.getItem("fashionLibrary")) || [];

function saveLibrary(){
  localStorage.setItem("fashionLibrary", JSON.stringify(library));
}

function displayHome(){
  const grid = document.getElementById("homeGrid");
  grid.innerHTML = "";

  items.forEach((item,index)=>{
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <button onclick="addToLibrary(${index})">Add to Collection</button>
    `;

    grid.appendChild(div);
  });
}

function displayLibrary(){
  const grid = document.getElementById("libraryGrid");
  grid.innerHTML = "";

  library.forEach((item,index)=>{
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <button onclick="removeFromLibrary(${index})">Remove</button>
    `;

    grid.appendChild(div);
  });
}

function addToLibrary(index){
  library.push(items[index]);
  saveLibrary();
  alert("Added to Collection");
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

// initial load
displayHome();