let page = 1;
let allResults = [];

async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  console.log(data);
  allResults = allResults.concat(data.results);

  for (let i = 0; i < allResults.length; i++) {
    const characterDiv = document.createElement('div');
    characterDiv.className = "sub-container";
    characterDiv.id = allResults[i].name;
  
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    nameDiv.innerHTML = allResults[i].name;
    characterDiv.appendChild(nameDiv);
  
    const statusDiv = document.createElement('div');
    statusDiv.id = 'status';
    statusDiv.innerHTML = "Status: " + allResults[i].status;
    characterDiv.appendChild(statusDiv);
  
    const speciesDiv = document.createElement('div');
    speciesDiv.id = 'species';
    speciesDiv.innerHTML = "Species: " + allResults[i].species;
    characterDiv.appendChild(speciesDiv);

    const originDiv = document.createElement('div');
    originDiv.id = 'origin';
    originDiv.innerHTML = "Origin: " + allResults[i].origin.name;  
    characterDiv.appendChild(originDiv);
    
    // Create the actual image and add a placeholder 
    const imageDiv = document.createElement('img');
    imageDiv.id = 'image';
    imageDiv.src = '/media/download.png';
    imageDiv.setAttribute('data-src', allResults[i].image);
    imageDiv.classList.add('lazy-image');
    characterDiv.appendChild(imageDiv);
  
    document.querySelector('#container').appendChild(characterDiv);
  }

  if (data.info.next) {
    page++;
    getCharacters();
  }
  
  // Select all lazy images
  const lazyImages = document.querySelectorAll('.lazy-image');

  // Create the observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Get the src from the data-src attribute
        const src = img.getAttribute('data-src');
        if (!src) {
          return;
        }

        // Set the src and remove the data-src attribute
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.remove('lazy-image');

        // Stop observing the image
        observer.unobserve(img);
      }
    });
  });

  // Start observing the images
  lazyImages.forEach(img => {
    observer.observe(img);
  });
}

getCharacters();






const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const searchResults = document.createElement('div');
searchResults.id = 'search-results';
document.body.appendChild(searchResults);





const backButton = document.createElement('button');
backButton.id = 'back-button';
backButton.innerHTML = 'Back';
backButton.style.position = 'absolute';
backButton.style.top = '5px';
backButton.style.display = 'none';
container.appendChild(backButton);


const dimmer = document.createElement('div');
dimmer.id = 'dimmer';
dimmer.style.display = 'none'; // hide the dimmer initially
document.body.appendChild(dimmer);

// add an event listener to the back button
backButton.addEventListener('click', () => {
  searchResults.style.display = 'none'; // hide the search results
  dimmer.style.display = 'none'; // hide the dimmer
  backButton.style.display = 'none';
});

// add an event listener to the search button
searchBar.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchResults.innerHTML = ''; // clear any previous search results
    const searchTerm = searchBar.value;
  
    // search through the list of characters for a match
    for (let i = 0; i < allResults.length; i++) {
      if (allResults[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
        // create a div to hold the character's info
        const characterDiv = document.createElement('div');
        characterDiv.className = "sub-container";
        characterDiv.id = allResults[i].name;
  
        // create an image for the character
        const imageDiv = document.createElement('img');
        imageDiv.id = 'image';
        imageDiv.src = allResults[i].image;
        characterDiv.appendChild(imageDiv);

        // create a div for the character's name
        const nameDiv = document.createElement('div');
        nameDiv.id = 'name';
        nameDiv.innerHTML = allResults[i].name;
        characterDiv.appendChild(nameDiv);
         // create a div for the character's status
         const statusDiv = document.createElement('div');
         statusDiv.id = 'status';
         statusDiv.innerHTML = allResults[i].status;
         characterDiv.appendChild(statusDiv);
   
         // create a div for the character's species
         const speciesDiv = document.createElement('div');
         speciesDiv.id = 'species';
         speciesDiv.innerHTML = allResults[i].species;
         characterDiv.appendChild(speciesDiv);

         const originDiv = document.createElement('div');
         originDiv.id = 'origin';
         originDiv.innerHTML = allResults[i].origin.name;  
         characterDiv.appendChild(originDiv);
   
         // add the character's info to the search results div
         searchResults.appendChild(characterDiv);
       }
     }
   
     // show the dimmer, search results, and back button
     dimmer.style.display = 'block';
     searchResults.style.display = 'block';
     backButton.style.display = 'block'; // show the back button when the search results are displayed
   }
});

searchButton.addEventListener('click', function() {
  searchResults.innerHTML = ''; // clear any previous search results
  const searchTerm = searchBar.value;
  
  // search through the list of characters for a match
  for (let i = 0; i < allResults.length; i++) {
    if (allResults[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
      // create a div to hold the character's info
      const characterDiv = document.createElement('div');
      characterDiv.className = "sub-container";
      characterDiv.id = allResults[i].name;
        // create an image for the character
    const imageDiv = document.createElement('img');
    imageDiv.id = 'image';
    imageDiv.src = allResults[i].image;
    characterDiv.appendChild(imageDiv);

    // create a div for the character's name
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    nameDiv.innerHTML = allResults[i].name;
    characterDiv.appendChild(nameDiv);
     // create a div for the character's status
     const statusDiv = document.createElement('div');
     statusDiv.id = 'status';
     statusDiv.innerHTML = allResults[i].status;
     characterDiv.appendChild(statusDiv);

     // create a div for the character's species
     const speciesDiv = document.createElement('div');
     speciesDiv.id = 'species';
     speciesDiv.innerHTML = allResults[i].species;
     characterDiv.appendChild(speciesDiv);

     const originDiv = document.createElement('div');
     originDiv.id = 'origin';
     originDiv.innerHTML = allResults[i].origin.name;  
     characterDiv.appendChild(originDiv);

     // add the character's info to the search results div
     searchResults.appendChild(characterDiv);
   }
 }

 // show the dimmer, search results, and back button
 dimmer.style.display = 'block';
 searchResults.style.display = 'block';
 backButton.style.display = 'block'; // show the back button when the search results are displayed
});



