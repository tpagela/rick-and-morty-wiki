fetch(`https://rickandmortyapi.com/api/location?page=7`)
.then((response) => response.json())
.then((data) => {
    allResults = allResults.concat(data.results);
    console.log(data)}
);

let page = 1;
let allResults = [];


async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
  const data = await response.json();

  allResults = allResults.concat(data.results);

  for (let i = 0; i < allResults.length; i++) {
   const locationDiv = document.createElement('div');
   locationDiv.className = "sub-container";
   locationDiv.id = allResults[i].name;
  
    const dimensionDiv = document.createElement('div');
    dimensionDiv.id = 'dimension';
    if (allResults[i].dimension == '') {
        allResults[i].dimension = 'unknown'
    }
    dimensionDiv.innerHTML = "Dimension: " + allResults[i].dimension;
    locationDiv.appendChild(dimensionDiv);

  
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    nameDiv.innerHTML = "Location: " + allResults[i].name;
    locationDiv.appendChild(nameDiv);

    document.querySelector('#container').appendChild(locationDiv);
  }
 
  if (data.info.next != null) {
    page++;
    getCharacters();
  }
}

getCharacters();