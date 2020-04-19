'use strict';

const ul = document.getElementById('sarjalista');
const hakuteksti = document.getElementById('hakuteksti');
const hakunappi = document.getElementById('hakunappi');

const haeTVSarja = async (haku)=> {

    //tyhjennä lista
    ul.innerHTML = '';
const fetchOptions = {
  /*  method: 'GET', 
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer: asdasd',
    },
    body: JSON.stringify(objekti), */
};

try {
    const vastaus = await fetch('http://api.tvmaze.com/search/shows?q=' + haku, fetchOptions);
    if (!vastaus.ok) throw new Error ('jokin meni pieleen');
    const sarjat = await vastaus.json();
    console.log(sarjat);
sarjat.forEach((sarja)=> {
/*    if(sarja.show.officialSite === NULL) {
        sarja.show.officialSite = sarja.show.url;
    }
    if (sarja.show.image === NULL) {
        sarja.show.image = {medium: 'http://placekitten.com/320/200'};
    } */

ul.innerHTML += `
<li>
<h2>${sarja.show.name}</h2>
<a href = "${sarja.show.officialSite === null ? sarja.show.url : 
    sarja.show.officialSite}">Linkki kotisivulle</a>
<img src="${sarja.show.image === null ? 'http://placekitten.com/320/200' : 
sarja.show.image.medium}" alt="${sarja.show.name}">
<p>${sarja.show.summary}</p>

</li>
`;
});

} catch (error) {
    console.log(error);
}
};

hakunappi.addEventListener('click', () => {
haeTVSarja(hakuteksti.value);
});