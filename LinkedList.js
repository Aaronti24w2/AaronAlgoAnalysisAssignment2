// In order to create a linked list
// We have to create a node first.

// Node

// [10] -> [20] -> [30] -> [40] -> [50] -> null
class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30)
let node4 = new Node(40);
let node5 = new Node(50);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(node1);

// Traverse the Linked List

function traverseNodes(node) {
    let str = '';
    while(node !== null) {
        str = str + node.data + ' -> ';
        node = node.next;
    }

    console.log(str + ' null '); // 10 -> 20 -> 30 -> 40 -> 50 -> null
}


// Class LinkedList // size

// [1] --> null
// H                C
// [0] --> [1] --> null
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }

    // ASSIGNMENT 1: Implement append method
    // Append A node.

    append(data){
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else { 
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    // Count = 2
                //   [15]
  // H,         P       nN       C
    // [30] -> [20] -> [15] ->[10] -> null
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(); // If the index is 0, prepend it.
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // removeFirst
    // [30] -> [20] -> [15] ->[10] -> null
    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Assignment:
    // Implement removeLast method

    removeLast(){
        if(!this.head) {
            return null;
        }

        if (this.head.next === null) { // last node in a list
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return current;
    }

    // Remove at a specifc index

// Count = 1, index = 1
    //  P       C
    // [30] -> [15] ->[10] -> null
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

        //,H                           C
     // [30] -> [20] -> [15] ->[10] -> null
    search(data) {
        let current = this.head;

        while (!current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }
//  index = 3, data = 25;
 // count = 3;
       //                      C
    // [30] -> [20] -> [15] ->[10] -> null
    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; // Update the data that we want.

    }
}

let linkedList = new LinkedList();

// 10 -> null
// 20 -> 10 -> null
// 30 -> 20 -> 10 -> null
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.append(40);
linkedList.insertAt(15, 2);
linkedList.updateAt(25, 3);

// 30 -> 15 -> 10 -> null
linkedList.printList();

linkedList.removeLast();

linkedList.printList();


// Blockchain