# Grid traveler

## Problem description

You can only travel right or down.
Find all possible ways of traveling from top left to bottom right corner of a grid of `n` x `m` size.

Example:
2x3

```
[S][ ][ ]
[ ][ ][F]
```

Solutions:

```
[x][x][x]   [x][x][ ]   [x][ ][ ]
[ ][ ][x]   [ ][x][x]   [x][x][x]
```

Answer: 3

### Breaking down

When you move from S down you narrow the grid to be 1x3.
That's because you can't go up, so you're left on a 1x3 grid.

```
[ ][ ][ ]
[*][ ][ ]
```

Now if I move right, I am on a 1x2 grid

```
[ ][ ][ ]
[ ][*][ ]
```

An finally when I move right again I am on a 1x1 grid

```
[ ][ ][ ]
[ ][ ][*]
```

And if I were to go right first I would be on:
 - 2x2 grid, move down
 - 1x2 grid, move right
 - 1x1 grid
 
OR
 - 2x2 grid, move right
 - 2x1 grid, move down
 - 1x1 grid

### Tree representation

Narrowing the grid upon going left in a tree (down on a grid) or right in a tree (right on a grid).

```
                      [2,3] <-- starting grid      
           / <-- going left           \ <-- going right
        [1,3]                        [2,2]
    /           \               /             \
 [0,3]         [1,2]          [1,2]          [1,2]
              /     \        /     \        /     \
           [0,2]   [1,1]  [0,2]   [1,1]  [1,1]   [0,0]
```

### Tree solution

Next to each grid is a number of possible ways.
Every parent's number of possible ways is a sum of it's childrens' numbers.

```
                       1 + 2 = 3
                      [2,3]      
           / 0 + 1 = 1                \ 1 + 1 = 2
        [1,3]                        [2,2]
    / 0         \ 0 + 1 = 1     / 0 + 1 = 1  \ 1 + 0 = 1
 [0,3]         [1,2]          [1,2]          [1,2]
            0 /     \ 1    0 /     \ 1    1 /     \ 0       <-- starting from the bottom going up
           [0,2]   [1,1]  [0,2]   [1,1]  [1,1]   [0,0]
```

And if I scratch the 0 results, I end up with possibilities of going:

1. down, right, right.
2. right, down, right.
3. right, right, down.
