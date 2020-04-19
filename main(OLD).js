
'use strict';

const ul = document.getElementById('sarjalista');

const haeTVSarja = async (haku) => {
const fetchOptions = {
// method: 'POST',
// headers: {
// 'Content-type': 'application/json',
// 'Authorization': 'Bearer: sdljhfjasndf4oirhkjg',
// },
// body: JSON.stringify(objekti),
}

try {
const vastaus = await fetch('http://api.tvmaze.com/search/shows?q=' + haku, fetchOptions);
if (!vastaus.ok) throw new Error('jokin meni pieleen');
const sarjat = await vastaus.json();
console.log(sarjat);
sarjat.forEach((sarja)=>{
  ul.innerHTML += `
  <li>
  <h2>${sarja.show.name}</h2>
  <a href = '${sarja.show.officialSite}'>Linkki kotivisulle</a>
  <img src = '${sarja.show.image.medium}' alt='${sarja.show.name}'>
  <p>${sarja.show.summary}</p>
  </li>
  `;
});
} 
catch (error) {
console.log(error);
}
};

haeTVSarja('dead'); 

