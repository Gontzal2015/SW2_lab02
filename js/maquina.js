import {Jugador} from './jugador.js'
export {Maquina}

class Maquina extends Jugador{
    constructor(nombre){
        super(nombre,Math.floor(Math.random()*100)+1,130)
    }
}