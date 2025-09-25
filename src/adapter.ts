export class InventarioViejo {
    private items: { nombre: string; tipo: string; estado: string }[] = [];

    addItem(nombre: string, tipo: string, estado: string): void {
        this.items.push({ nombre, tipo, estado });
    }

    obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
        return this.items;
    }
}

export class AdaptadorInventario {
    constructor(private inventarioViejo: InventarioViejo) { }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.addItem(nombre, tipo, estado);
    }

    listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.inventarioViejo.obtenerItems();
    }
}

export async function runAdapter() {
    console.log("---PATRON ADAPTER---");
    const inventarioViejo = new InventarioViejo();
    const adaptador = new AdaptadorInventario(inventarioViejo);
    adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
    console.log(adaptador.listarEquipos());
}