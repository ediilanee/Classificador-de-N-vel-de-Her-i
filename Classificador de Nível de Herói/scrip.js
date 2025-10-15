let NomeHeroi = "edilane,heroina da espada";
let SeuXp = 2400;
let NivelHeroi = ""

if( SeuXp <1000){
    NivelHeroi = "Ferro"; 
} else if(SeuXp >= 1001 && SeuXp <= 2000) {
    NivelHeroi = "bronze"
} else if(SeuXp >=  2001 && SeuXp <= 5000  ) {
    NivelHeroi = " prata"
} 
else if(SeuXp >= 5001 && SeuXp <= 7000 ) {
    NivelHeroi = "ouro"
} 
else if(SeuXp >= 7001  && SeuXp <= 8000 ) {
    NivelHeroi = "Platina "
} 
else if(SeuXp >= 8001 && SeuXp <= 9000 ) {
    NivelHeroi = "Ascendente"
} else if(SeuXp >= 9001 && SeuXp <= 10000 ) {
    NivelHeroi = " Imortal "
} else{
    NivelHeroi= "Radiante "
}


console.log(`O Herói de nome ${NomeHeroi} está no nível de ${NivelHeroi}`);



