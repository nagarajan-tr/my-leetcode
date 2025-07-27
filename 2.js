// 2. You are given two non-empty linked lists representing two non-negative integers. 
    //The digits are stored in reverse order, and each of their nodes contains a single digit. 
    //Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


function listNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
    var dummy = new listNode(0);
    var current = dummy;
    var carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        var sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new listNode(sum % 10); // Add digit
        carry = Math.floor(sum / 10);         // Update carry
        current = current.next;              // Move to the next node
    }

    return dummy.next; // Return the resulting linked list
};

function createLinkedList(arr) {
    let dummy = new listNode();
    let current = dummy;

    for (var num of arr) {
        current.next = new listNode(num);
        current = current.next;
    }
    return dummy.next;
}

function LinkedListtoArray(node) {
    var res = [];
    while (node !== null) {
        res.push(node.val);
        node = node.next;
    }
    return res;
}
 
var l1 = createLinkedList([2, 4, 3]);
var l2 = createLinkedList([5, 6, 4]);

var result = addTwoNumbers(l1, l2);
console.log(LinkedListtoArray(result));
