interface Observador {
    notificar(equipo: Equipo, nuevoEstado: string): void;
}

class Soporte implements Observador {
    notificar(equipo: Equipo, nuevoEstado: string): void {
        console.log(
            `Soporte notificado: ${equipo.getNombre()} ha cambiado su estado a ${nuevoEstado}.`
        );
    }
}

class Equipo {
    private observadores: Observador[] = [];

    constructor(
        private nombre: string,
        private tipo: string,
        private estado: string
    ) { }

    getNombre(): string {
        return this.nombre;
    }

    getTipo(): string {
        return this.tipo;
    }

    getEstado(): string {
        return this.estado;
    }


    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.notificar(this, this.estado));
    }
}

export async function runObserver() {
    console.log("---PATRON OBSERVER---");
    const soporte = new Soporte();
    const equipo = new Equipo("Notebook HP", "Portatil", "Disponible");
    equipo.agregarObservador(soporte);
    equipo.cambiarEstado("En reparacion");
}