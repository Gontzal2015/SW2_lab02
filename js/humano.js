import {Jugador} from './jugador.js'
export {Humano}

class Humano extends Jugador{
    constructor(nombre){
        super(nombre,70,150)
    }
}