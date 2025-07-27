
// 21. Merge Two Sorted Lists

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function ArrayToLinkedlist(arr){
    let dummy = new ListNode();
    let cur = dummy;

    for(let val of arr){
        cur.next = new ListNode(val);
        cur = cur.next;
    }

    return dummy.next;
}

function LinkedLIstToArray(node){
      let res = [];

      while(node){
            res.push(node.val);
            node = node.next;
      }
    return res;
}

var MargeTwoSortList = function(list1, list2){

    let dummy = new ListNode();
    let cur = dummy;

    while(list1 && list2){
        if(list1.val > list2.val){
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 || list2;

    return dummy.next;

}

let l1 = ArrayToLinkedlist([1,2,4]);
let l2 = ArrayToLinkedlist([2,3,4]);

let mergedList = MargeTwoSortList(l1, l2);

console.log(l1,l2, mergedList);

console.log(LinkedLIstToArray(mergedList)); // [1,1,2,3,4,4]