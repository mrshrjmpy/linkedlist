export const LinkedList = class {
    constructor(){
        this.head = null;
    }
    toString(){
        let current = this.head;
        let result = "";
        while(current !== null){
            result += "( " + current.value + " ) -> ";
            current = current.nextNode;
        }
        result += "null";
        console.log(result);

    }
    append(value){
        if(this.head == null){
            
            let newNode = new Node(value);
            this.head = newNode;
        }
        else
        {
            let current = this.head;
            while(current.nextNode !== null)
            {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
    }
    prepend(value){
        if(this.head == null){
            this.head = new Node(value);
        }
        else {
            let newNode = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    size()
    {
        let count = 0;
        if(this.head === null) return 0;
        let current = this.head;
        while(current != null)
        {
            count++;
            current = current.nextNode;
        }
        return count;
    }
    headval(){
       return this.head === null ? undefined : this.head.value;
    }
    tail(){
        if(this.head === null) return undefined;
        let current = this.head;
        while(current.nextNode != null)
        {
            current = current.nextNode;
        }
        return current.value;
    }
    at(index){
        if(this.head === null) return undefined;
        if(index > this.size()) return undefined;
        let current = this.head;
        let i = 0;
        while(i < index){
            current = current.nextNode;
            i++;
        }
        return current.value;
    }
    pop(){
        let head = this.head;
        this.head = this.head.nextNode;
        return head.value;
    }
    contains(value){
        if(this.head === null) return false;
        let current = this.head;
        while(current !== null){
            if(current.value == value)
                return true;
            current = current.nextNode;
        }
        return false;
    }
    findIndex(value){
        let i = 0;
        let current = this.head;
        while(current !== null){
            if(current.value == value)
                return i;
            current = current.nextNode;
        }
        return -1;
    }
    insertAt(index, ...values){
        if(index<0 || index>this.size()) throw RangeError;

        let i = 0, j = 0;
        let current = this.head;
        while(i < index - 1){
            current = current.nextNode;
            i++;
        }
        let temp = current.nextNode;
        while(j < values.length){
            current.nextNode = new Node(values[j]);
            current = current.nextNode;
            j++;
        }
        current.nextNode = temp;
    }
    removeAt(index){
        if(index<0 || index>this.size()) throw RangeError;
        let i = 0;
        let current = this.head;
        while(i < index - 1){
            current=current.nextNode;
            i++;
        }
        current.nextNode = current.nextNode.nextNode; 
    }
}

const Node = class {
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}

