let ciparuSkaits;
let variantuSkaits;
let papildusVards;

const vardi1=['liels','mazs','spalvains','interesants','melns','balts','krasains','skaists'];
const vardi2= ['juris','vista','krumins','andis','karlis','babris','martins','simons','ingus'];
const vardi3= ['ir','skrien','lec','peld','mekle','krit','karajas','ed','gul'];

let rindas = document.querySelector('.rindas');



function randFunc(maxCipars) {
    let random1=Math.floor(Math.random()*maxCipars);
    return random1;
  }

function generet() {
  ciparuSkaits = document.querySelector('#ciparuSkaits').value;
  variantuSkaits = document.querySelector('#variantuSkaits').value;
  papildusVards = document.querySelector('#papildusVards').value;
    rindas.innerHTML=""; //lai katru reizi izdzes

    
    
    for (let i = 0; i < variantuSkaits; i++) {

    let rand=randFunc(vardi1.length);
    let rand2=randFunc(vardi2.length);
    let rand3=randFunc(vardi3.length);

      let parole1=vardi1[rand];
      let parole2=vardi2[rand2];
      let parole3=vardi3[rand3];

      let random= Math.ceil(Math.random()*(Math.pow(10,ciparuSkaits)));

      let parole=parole1+parole2+parole3+papildusVards+random;

   // console.log(parole);

    rindas.innerHTML += `
 <tr>
  <td>${i + 1}</td>
  <td>${parole}</td>
</tr>`


 }
}

