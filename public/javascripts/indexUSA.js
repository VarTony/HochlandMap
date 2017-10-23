const getIdUSA = (id) => document.getElementById(id);



 function arizonaSelect() {
let map = getIdUSA("map2");
let Afactory = getIdEurope("Afacoty");
let Ffactory = getIdEurope("Ffacoty");
let Nfactory = getIdEurope("Nfacoty");
let Wfactory = getIdEurope("Wfacoty");
let Vfactory = getIdEurope("Vfacoty");

Afactory.style.display = 'block';
Ffactory.style.display = 'none';
Nfactory.style.display = 'none';
Wfactory.style.display = 'none';
Vfactory.style.display = 'none';

map.style.backgroundImage = "url('./images/USA/ARIZONA.png')"
}


function wisconsinSelect() {
let map = getIdUSA("map2");
let Afactory = getIdEurope("Afacoty");
let Ffactory = getIdEurope("Ffacoty");
let Nfactory = getIdEurope("Nfacoty");
let Wfactory = getIdEurope("Wfacoty");
let Vfactory = getIdEurope("Vfacoty");

Afactory.style.display = 'none';
Ffactory.style.display = 'none';
Nfactory.style.display = 'none';
Wfactory.style.display = 'block';
Vfactory.style.display = 'none';


map.style.backgroundImage = "url('./images/USA/WISCONSIN.png')"
}

function floridaSelect() {
let map = getIdUSA("map2");
let Afactory = getIdEurope("Afacoty");
let Ffactory = getIdEurope("Ffacoty");
let Nfactory = getIdEurope("Nfacoty");
let Wfactory = getIdEurope("Wfacoty");
let Vfactory = getIdEurope("Vfacoty");

Afactory.style.display = 'none';
Ffactory.style.display = 'block';
Nfactory.style.display = 'none';
Wfactory.style.display = 'none';
Vfactory.style.display = 'none';

map.style.backgroundImage = "url('./images/USA/FLORIDA.png')"
}

function newJerseySelect() {
let map = getIdUSA("map2");
let Afactory = getIdEurope("Afacoty");
let Ffactory = getIdEurope("Ffacoty");
let Nfactory = getIdEurope("Nfacoty");
let Wfactory = getIdEurope("Wfacoty");
let Vfactory = getIdEurope("Vfacoty");

Afactory.style.display = 'none';
Ffactory.style.display = 'none';
Nfactory.style.display = 'block';
Wfactory.style.display = 'none';
Vfactory.style.display = 'none';

map.style.backgroundImage = "url('./images/USA/new-jersey.png')"
}

function vermontSelect() {
let map = getIdUSA("map2");
let Afactory = getIdEurope("Afacoty");
let Ffactory = getIdEurope("Ffacoty");
let Nfactory = getIdEurope("Nfacoty");
let Wfactory = getIdEurope("Wfacoty");
let Vfactory = getIdEurope("Vfacoty");

Afactory.style.display = 'none';
Ffactory.style.display = 'none';
Nfactory.style.display = 'none';
Wfactory.style.display = 'none';
Vfactory.style.display = 'block';

map.style.backgroundImage = "url('./images/USA/VERMONT.png')"
}
