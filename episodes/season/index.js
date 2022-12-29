

const searchParams = new URLSearchParams(window.location.search);
const season = searchParams.get('season');

document.querySelector('#season-title').textContent = `Season ${season}`;

if (season === '1') {
  seasonOneFetch();
} else if (season === '2') {
  seasonTwoFetch();
} else if (season === '3') {
  seasonThreeFetch();
} else if (season === '4') {
  seasonFourFetch();
} else if (season === '5') {
  seasonFiveFetch();
}
else if (season === '6') {
  seasonSixFetch();
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function seasonOneFetch() {
    let thisEpisodeName;
    let thisEpisodeNumber;
    let thisEpisodeCharacters;
    for (var i = 1; i < 12; i++) {
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
        .then((response) => response.json())
        .then((data) => {
        const characters = data.characters;
        const shuffledCharacters = shuffle(characters);
        const randomCharacters = shuffledCharacters.slice(0, 3);

        
        fetch(randomCharacters[0])
        .then((response) => response.json())
        .then((data) => {
            thisEpisodeCharacters = data.name;
            thisCharacterImage = data.image;
            const characterImage = document.createElement('img');
            characterImage.setAttribute('src', thisCharacterImage);
            const episodeList = document.getElementById('episode-list');
            episodeElement2.appendChild(characterImage); 
            episodeElement3.textContent += "Featured character: " + thisEpisodeCharacters;
        });
            thisEpisodeName = data.name;
            thisEpisodeNumber = data.episode;
            const episodeList = document.getElementById('episode-list');
            const episodeContainer = document.createElement('div');
            episodeContainer.classList.add("mini")
            const episodeElement = document.createElement('h2');
            const episodeElement2 = document.createElement('h3');
            const episodeElement3 = document.createElement('p');
            episodeElement.textContent += thisEpisodeNumber + " ";
            episodeElement2.textContent += thisEpisodeName;
            episodeList.appendChild(episodeContainer);
            episodeContainer.appendChild(episodeElement);  
            episodeElement.appendChild(episodeElement2);  
            episodeElement2.appendChild(episodeElement3);
    });
 }
}

function seasonTwoFetch() {
  let thisEpisodeName;
  let thisEpisodeNumber;
  let thisEpisodeCharacters;
  for (var i = 12; i < 22; i++) {
      fetch(`https://rickandmortyapi.com/api/episode/${i}`)
      .then((response) => response.json())
      .then((data) => {
      const characters = data.characters;
      const shuffledCharacters = shuffle(characters);
      const randomCharacters = shuffledCharacters.slice(0, 3);

      
      fetch(randomCharacters[0])
      .then((response) => response.json())
      .then((data) => {
          thisEpisodeCharacters = data.name;
          thisCharacterImage = data.image;
          const characterImage = document.createElement('img');
          characterImage.setAttribute('src', thisCharacterImage);
          const episodeList = document.getElementById('episode-list');
          episodeElement2.appendChild(characterImage); 
          episodeElement3.textContent += "Featured character: " + thisEpisodeCharacters;
      });
          thisEpisodeName = data.name;
          thisEpisodeNumber = data.episode;
          const episodeList = document.getElementById('episode-list');
          const episodeContainer = document.createElement('div');
          episodeContainer.classList.add("mini")
          const episodeElement = document.createElement('h2');
          const episodeElement2 = document.createElement('h3');
          const episodeElement3 = document.createElement('p');
          episodeElement.textContent += thisEpisodeNumber + " ";
          episodeElement2.textContent += thisEpisodeName;
          episodeList.appendChild(episodeContainer);
          episodeContainer.appendChild(episodeElement);  
          episodeElement.appendChild(episodeElement2);  
          episodeElement2.appendChild(episodeElement3);
  });
}
}

function seasonThreeFetch() {
  let thisEpisodeName;
  let thisEpisodeNumber;
  let thisEpisodeCharacters;
  for (var i = 22; i < 32; i++) {
      fetch(`https://rickandmortyapi.com/api/episode/${i}`)
      .then((response) => response.json())
      .then((data) => {
      const characters = data.characters;
      const shuffledCharacters = shuffle(characters);
      const randomCharacters = shuffledCharacters.slice(0, 3);

      
      fetch(randomCharacters[0])
      .then((response) => response.json())
      .then((data) => {
          thisEpisodeCharacters = data.name;
          thisCharacterImage = data.image;
          const characterImage = document.createElement('img');
          characterImage.setAttribute('src', thisCharacterImage);
          const episodeList = document.getElementById('episode-list');
          episodeElement2.appendChild(characterImage); 
          episodeElement3.textContent += "Featured character: " + thisEpisodeCharacters;
      });
          thisEpisodeName = data.name;
          thisEpisodeNumber = data.episode;
          const episodeList = document.getElementById('episode-list');
          const episodeContainer = document.createElement('div');
          episodeContainer.classList.add("mini")
          const episodeElement = document.createElement('h2');
          const episodeElement2 = document.createElement('h3');
          const episodeElement3 = document.createElement('p');
          episodeElement.textContent += thisEpisodeNumber + " ";
          episodeElement2.textContent += thisEpisodeName;
          episodeList.appendChild(episodeContainer);
          episodeContainer.appendChild(episodeElement);  
          episodeElement.appendChild(episodeElement2);  
          episodeElement2.appendChild(episodeElement3);
  });
}
}

function seasonFourFetch() {
  let thisEpisodeName;
  let thisEpisodeNumber;
  let thisEpisodeCharacters;
  for (var i = 32; i < 42; i++) {
      fetch(`https://rickandmortyapi.com/api/episode/${i}`)
      .then((response) => response.json())
      .then((data) => {
      const characters = data.characters;
      const shuffledCharacters = shuffle(characters);
      const randomCharacters = shuffledCharacters.slice(0, 3);

      
      fetch(randomCharacters[0])
      .then((response) => response.json())
      .then((data) => {
          thisEpisodeCharacters = data.name;
          thisCharacterImage = data.image;
          const characterImage = document.createElement('img');
          characterImage.setAttribute('src', thisCharacterImage);
          const episodeList = document.getElementById('episode-list');
          episodeElement2.appendChild(characterImage); 
          episodeElement3.textContent += "Featured character: " + thisEpisodeCharacters;
      });
          thisEpisodeName = data.name;
          thisEpisodeNumber = data.episode;
          const episodeList = document.getElementById('episode-list');
          const episodeContainer = document.createElement('div');
          episodeContainer.classList.add("mini")
          const episodeElement = document.createElement('h2');
          const episodeElement2 = document.createElement('h3');
          const episodeElement3 = document.createElement('p');
          episodeElement.textContent += thisEpisodeNumber + " ";
          episodeElement2.textContent += thisEpisodeName;
          episodeList.appendChild(episodeContainer);
          episodeContainer.appendChild(episodeElement);  
          episodeElement.appendChild(episodeElement2);  
          episodeElement2.appendChild(episodeElement3);
  });
}
}

function seasonFiveFetch() {
  let thisEpisodeName;
  let thisEpisodeNumber;
  let thisEpisodeCharacters;
  for (var i = 42; i < 52; i++) {
      fetch(`https://rickandmortyapi.com/api/episode/${i}`)
      .then((response) => response.json())
      .then((data) => {
      const characters = data.characters;
      const shuffledCharacters = shuffle(characters);
      const randomCharacters = shuffledCharacters.slice(0, 3);

      
      fetch(randomCharacters[0])
      .then((response) => response.json())
      .then((data) => {
          thisEpisodeCharacters = data.name;
          thisCharacterImage = data.image;
          const characterImage = document.createElement('img');
          characterImage.setAttribute('src', thisCharacterImage);
          const episodeList = document.getElementById('episode-list');
          episodeElement2.appendChild(characterImage); 
          episodeElement3.textContent += "Featured character: " + thisEpisodeCharacters;
      });
          thisEpisodeName = data.name;
          thisEpisodeNumber = data.episode;
          const episodeList = document.getElementById('episode-list');
          const episodeContainer = document.createElement('div');
          episodeContainer.classList.add("mini")
          const episodeElement = document.createElement('h2');
          const episodeElement2 = document.createElement('h3');
          const episodeElement3 = document.createElement('p');
          episodeElement.textContent += thisEpisodeNumber + " ";
          episodeElement2.textContent += thisEpisodeName;
          episodeList.appendChild(episodeContainer);
          episodeContainer.appendChild(episodeElement);  
          episodeElement.appendChild(episodeElement2);  
          episodeElement2.appendChild(episodeElement3);
  });
}

}

function seasonSixFetch() {
  const episodeElement = document.createElement('h1');
  const episodeList = document.getElementById('episode-list');

  episodeElement.textContent = "COMING SOON";
  episodeElement.id = 'season-6';
  episodeList.appendChild(episodeElement);
}



