import LinkedList from '../dataStructures/linkedList/linkedList.js'

//BASIC HASHING -> it wont append the elements just rewrite it all

class HashTable {

    constructor() {
        this.table = new Array(137)
    }

    loseLoseHashCode(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37

    }

    put(key, value) {
        let position = this.loseLoseHashCode(key)
        this.table[position] = value
    }

    remove(key) {
        let position = this.loseLoseHashCode(key)
        this.table[position] = undefined
    }

    get(key) {
        let position = this.loseLoseHashCode(key)
        return this.table[position]
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + ' -> ' + this.table[i])
            }
        }
    }

}

//CHAINING -> linked list append 

class HashTableChaining {

    constructor() {
        this.table = new Array(137);
    }

    loseLoseHashCode(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    valuePair = function (key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    print = function () {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + ' -> ' + this.table[i])
            }
        }
    }

    put(key, value) {

        let position = this.loseLoseHashCode(key)

        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }

        this.table[position].append(new this.valuePair(key, value))

    }

    get(key) {

        var position = this.loseLoseHashCode(key);

        if (this.table[position] !== undefined) {
            //iterate linked list to find key/value
            var current = this.table[position].getHead();

            while (current.next) {

                if (current.element.key === key) {
                    return current.element.value;
                } current = current.next;

            }
            //check in case first or last element

            if (current.element.key === key) {
                return current.element.value;
            }

        }

        return undefined;

    }

    remove(key) {
        var position = this.loseLoseHashCode(key);
        if (this.table[position] !== undefined) {
            var current = this.table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    this.table[position].remove(current.element);
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) {
                this.table[position].remove(current.element);
                if (this.table[position].isEmpty()) {
                    this.table[position] = undefined;
                }
                return true;
            }
        }
        return false;

    }

}

//LINEAR PROBING ->
class HashTableLinear {

    constructor() {
        this.table = new Array(137);
    }

    loseLoseHashCode(key) {
        let hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash += hash * 33 +  key.charCodeAt(i)
        }
        return hash % this.table.length

    }

    valuePair = function (key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    put(key, value) {

        let position = this.loseLoseHashCode(key)

        if (this.table[position] == undefined) {
          
            this.table[position] = new this.valuePair(key, value)
        
        } else {
        
            let index = ++position
        
            while (this.table[index] != undefined) {
                index++
            }
        
            this.table[index] = new this.valuePair(key, value)
        
        }
    }

    get(key) {
        
        let position = this.loseLoseHashCode(key)

        if (this.table[position] !== undefined) {
        
            if (this.table[position].key === key) {
        
                return this.table[position].value
        
            } else {
        
                let index = ++position
        
                while (this.table[index] === undefined || this.table[index].key !== key) {
        
                    index++
        
                }
        
                if (this.table[index].key === key) {
        
                    return this.table[index].value
        
                }
            }
        }
        
        return undefined
    
    }


    remove(key) {
    
        let position = this.loseLoseHashCode(key)

        if (this.table[position] !== undefined) {
    
            if (this.table[position].key === key) {
    
                return this.table[position].value
    
            } else {
    
                let index = ++position
    
                while (this.table[index] === undefined || this.table[index].key !== key) {
    
                    index++
    
                }
    
                if (this.table[index].key === key) {
    
                    this.table[index] = undefined
    
                }
            }
        }
    }

    print = function () {
    
        for (let i = 0; i < this.table.length; i++) {
    
            if (this.table[i] !== undefined) {
    
                console.log(i + ' -> ' + this.table[i])
    
            }
        }
    }

}

var hash = new HashTableLinear();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
console.log(hash.get('Donnie'))

hash.remove('Gandalf');

console.log(hash.get('Gandalf'));

hash.print();
