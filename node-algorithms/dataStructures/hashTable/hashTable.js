
const loseloseHashCode = (key, tableSize = 137) => {

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % tableSize;

}

class HashTable {

    constructor(tableSize = 137) {
        this.table = new Array(tableSize)
        this.size = tableSize
    }


    // method to obtain th eposition 

    _hash(key) {
        return loseloseHashCode(key, this.size)
    }

    // insertar o actualizar un par 

    put(key, value) {
        const pos = this._hash(key);

        if (!this.table[pos]) {
            this.table[pos] = [];
        }
        const bucket = this.table[pos];
        // Buscar si la clave ya existe
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value; // actualizar
                return;
            }
        }
        // Si no existe, agregar nueva entrada
        bucket.push({ key, value })

    }

    //obtener valor 
    get(key) {
        const pos = this._hash(key);
        const bucket = this.table[pos]

        if (bucket) {

            for (const item of bucket) {
                if (item.key === key) return item.value

            }
        }

        return undefined

    }



}
