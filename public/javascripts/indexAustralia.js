const getIdAustralia = (id) => document.getElementById(id);

function MelbourneSelect() {
let map = getIdAustralia("map3");
let Mfactory = getIdAustralia("Mfactory");

Mfactory.style.display = 'block';

map.style.backgroundImage = "url('./images/Australia/AustraliaM.png')"
}
