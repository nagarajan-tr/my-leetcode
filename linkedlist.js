//Linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        while (!this.head) {
            this.head = newNode;
            return 0;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;  //Add the new node at the end
    }

    printlist(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append("apple");
list.append("banana");
list.append("cerry");
list.printlist();
console.log(list);