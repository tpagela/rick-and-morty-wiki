const seasonLinks = document.querySelectorAll('.season-link');

for (const link of seasonLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const season = event.target.dataset.season;
    const url = `../season/index.html?season=${season}`;

    window.location = url;
  });
}