export {Jugador}

class Jugador {
    constructor(nombre, fuerza, salud){
        this.miNombre = nombre
        this.fuerza = fuerza
        this.salud = salud
    }

    luchar(jugador){
        if ( Math.random()* this.fuerza > jugador.fuerza ){
            jugador.salud -= this.fuerza;
        } else {
            this.salud -= jugador.fuerza;
        }
    }

    get nombre(){
        return this.miNombre
    }
}