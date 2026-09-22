// Importar clases
import{Humano} from './humano.js';
import { Extraterrestre } from './extraterrestre.js';
import { Maquina } from './maquina.js';
import { Jugador } from './jugador.js';

// The Fisher-Yates algorithm for shuffling an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Inicializar un único array con 50 maquinas, 50 humanos y 50 extraterrestres
let campo = []

for(let i=0;i<50;i++){
    campo.push(new Humano("h"+i))
    campo.push(new Extraterrestre("e"+i))
    campo.push(new Maquina("m"+i))
}
// Ordenar los elementos del array al azar

shuffleArray(campo)

// Imprimir el campo
console.log(campo)
// Para ir imprimiendo los turnos
let turno =1

// Mientras quede mas de un jugador en el array pelear por parejas
while(campo.length>1){
    console.log(`Turno: ${turno}`)
    for (let j=0;j<campo.length - 1;j+=2){      // Pelear por parejas. Si los elementos que quedan en el array son impares, el último no pelea
        campo[j].luchar(campo[j+1])
    }
    campo = campo.filter(x=>x.salud>0) // eliminar los que se quedan fuera
   
    shuffleArray(campo)// ordernar

    turno++
}
// Imprimir campeón. Unico elemento que queda en el array
console.log("Campeón: " + campo[0].nombre) 
