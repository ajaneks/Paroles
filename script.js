let ciparuSkaits;
let variantuSkaits=5;
let papildusVards;

const vardi1=['liels','mazs','spalvains','interesants','ciets']
const vardi2= ['juris','vista','krumins','andis','karlis']
const vardi3= ['ir','skrien','lec','peld','mekle']

let rindas = document.querySelector('.rindas');


function randFunc(maxCipars) {
    let random1=Math.floor(Math.random()*maxCipars);
    return random1;
  }


function generet() {
    rindas.innerHTML=""; //lai katru reizi izdzes
    
    for (let i = 0; i < variantuSkaits; i++) {

    let rand=randFunc(vardi1.length);
    let rand2=randFunc(vardi2.length);
    let rand3=randFunc(vardi3.length);

      let parole1=vardi1[rand];
      let parole2=vardi2[rand2];
      let parole3=vardi3[rand3];

      let parole=parole1+parole2+parole3;
     



    //console.log(parole);

    rindas.innerHTML += `
 <tr>
  <td>${i + 1}</td>
  <td>${parole}</td>
</tr>`


 }
}
