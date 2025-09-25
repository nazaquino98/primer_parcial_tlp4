abstract class Equipo2 {
    constructor(
        protected tipo: string,
        protected nombre: string,
        protected ram: string,
        protected procesador: string
    ) { }


    abstract detalles(): string;
}

class Servidor extends Equipo2 {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Servidor", nombre, ram, procesador);
    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo2 {
        switch (tipo) {
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error(`Tipo de equipo no soportado: ${tipo}`);
        }
    }
}

export async function runFactory() {
    console.log("---PATRON FACTORY---");
    const factory = new EquipoFactory();
    const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
    console.log(server.detalles());
}