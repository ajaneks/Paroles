let ciparuSkaits;
let variantuSkaits;
let papildusVards;
let tabulasRindas = document.querySelector('.rindas');

const vardi1=['liels','mazs','spalvains','interesants','melns','balts','krasains','skaists'];
const vardi2= ['juris','vista','krumins','andis','karlis','babris','martins','simons','ingus'];
const vardi3= ['ir','skrien','lec','peld','mekle','krit','karajas','ed','gul'];


function rand(maxCipars)
{
  random1 = Math.floor( Math.random() * maxCipars );
  return random1;
}


function veidotParoli(papildusVards,ciparuSkaits)
{
 let random1 = rand(vardi1.length);
 let random2 = rand(vardi2.length);
 let random3 = rand(vardi2.length);

  let paroleVards1 = tekstuSarezgit( vardi1[random1] );
  paroleVards1 = paroleVards1.replace('a','@');
 
  let paroleVards2;
  if( papildusVards != '' )
  {
    paroleVards2 = tekstuSarezgit( papildusVards );
  }
  else
  {
   paroleVards2 = tekstuSarezgit( vardi2[random2] );
  }

  let paroleVards3 = tekstuSarezgit( vardi3[random3] );
  let cipari = cipariParolei(ciparuSkaits);
  let parole = paroleVards1+paroleVards2+paroleVards3+cipari;
  
  return parole;
}



function cipariParolei(ciparuSkaits)
{
   let cipars = String();
   for (let i = 0; i < ciparuSkaits; i++) 
   {
     cipars += rand(9);
   }
   return cipars;
}



function tekstuSarezgit(teksts)
{
  if(rand(10) > 5)
  {
  teksts = teksts.replace('i','1');
 teksts = teksts.replace('a','@');
 }
  teksts = lieloPirmoBurtu(teksts);

  return teksts;
}



function lieloPirmoBurtu(vards)
{
  let pirmaisBurts = vards.substr(0, 1);
  pirmaisBurts = pirmaisBurts.toUpperCase();
  let parejaisVards = vards.substr(1);

 return pirmaisBurts+parejaisVards;
}



function generetParoles()
{
  ciparuSkaits = document.querySelector('#ciparuSkaits').value;
  variantuSkaits = document.querySelector('#variantuSkaits').value;
  papildusVards = document.querySelector('#papildusVards').value;
  tabulasRindas.innerHTML = '';
  
  for (let i = 0; i < variantuSkaits; i++) {
  
    let parole = veidotParoli(papildusVards,ciparuSkaits);
    
    tabulasRindas.innerHTML += `
    <tr>
    <td>${i+1}</td>
    <td>${parole}</td>
    </tr>`;
  }


}