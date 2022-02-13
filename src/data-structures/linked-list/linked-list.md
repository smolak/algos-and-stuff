# Linked list

 - data (can be) scattered across memory (whereas Array is contiguously set in memory)
 - each element on the list has a pointer to its next element (last has a null pointer)
 - you need O(n) steps to get the n-th element in the list (compared to O(1) in Array)

### Pros over array
 - inserting new elements in array is O(n) (as in worst case scenario you need to shift
   all elements). In LL all you need to do is add an element (anywhere in the memory) and change
   a pointer in a single element - O(1)

### Cons
 - getting n-th element requires O(n) operations
 - same with length

   -->( A )-->( B )-->( C )-->( D )-->

## Doubly linked list
is a LL which elements (besides the head) have pointers to their previous
element:

-->( A )<-->( B )<-->( C )<-->( D )-->

## Dummy head linked list
Has one fake node (head) and is empty.

-->( head )-->( A )-->( B )-->( C )-->( D )-->
