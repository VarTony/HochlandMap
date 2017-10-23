const getId = (id) => document.getElementById(id);
let titleEurope = getId('EUROPE');
let titleUSA = getId('USA');
let titleAustralia = getId('AUSTRALIA');


function europeSelect(){
 let europeMap = getId('land1');
 let USAMap = getId('land2');
 let australiaMap = getId('land3');
// border
let EuropeTitle = getId('EUROPE');
let USATitle = getId('USA');
let AustraliaTitle = getId('AUSTRALIA');

EuropeTitle.style.color = '#dc7676';
USATitle.style.color = 'black';
AustraliaTitle.style.color = 'black';

EuropeTitle.style.borderColor = '#dc7676';
USATitle.style.borderColor = '#6262ee';
AustraliaTitle.style.borderColor = '#6262ee';

europeMap.style.display = "block";
USAMap.style.display = "none";
australiaMap.style.display = "none";
}

function USASelect(){
  let europeMap = getId('land1');
  let USAMap = getId('land2');
  let australiaMap = getId('land3');

// border

let EuropeTitle = getId('EUROPE');
let USATitle = getId('USA');
let AustraliaTitle = getId('AUSTRALIA');

EuropeTitle.style.color = 'black';
USATitle.style.color = '#dc7676';
AustraliaTitle.style.color = 'black';

EuropeTitle.style.borderColor = '#6262ee';
USATitle.style.borderColor = '#dc7676';
AustraliaTitle.style.borderColor = '#6262ee';

europeMap.style.display = "none";
USAMap.style.display = "block";
australiaMap.style.display = "none";
}

function australiaSelect(){
  let europeMap = getId('land1');
  let USAMap = getId('land2');
  let australiaMap = getId('land3');

// border

let EuropeTitle = getId('EUROPE');
let USATitle = getId('USA');
let AustraliaTitle = getId('AUSTRALIA');

EuropeTitle.style.color = 'black';
USATitle.style.color = 'black';
AustraliaTitle.style.color = '#dc7676';

EuropeTitle.style.borderColor = '#6262ee';
USATitle.style.borderColor = '#6262ee';
AustraliaTitle.style.borderColor = '#dc7676';

europeMap.style.display = "none";
USAMap.style.display = "none";
australiaMap.style.display = "block";
}
