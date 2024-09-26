/**
 * * A type of Tree 
 Binary trees are hierarchical data structures composed of nodes, where each node has at most two children, referred to as the left child and the right child. Here are some properties of binary trees:

Root: A binary tree has a special node called the root, which is the topmost node in the tree. All other nodes are descendants of this root node.

Nodes: Each node in a binary tree contains a value and may have up to two child nodes, referred to as the left child and the right child. Nodes that do not have children are called leaf nodes or external nodes.

Depth: The depth of a node in a binary tree is the length of the path from the root to that node. The depth of the root node is 0, and the depth of any other node is one more than the depth of its parent.

Height: The height of a binary tree is the maximum depth of any node in the tree. Alternatively, it is the length of the longest path from the root to a leaf node. The height of an empty tree is typically defined as -1, and the height of a tree with only one node (the root) is 0.

Levels: The levels of a binary tree are defined by the depth. Level 0 consists of the root node, level 1 consists of the children of the root, and so on.

Balance: A binary tree is balanced if the heights of its left and right subtrees differ by at most one for every node in the tree. Balanced trees facilitate efficient search, insertion, and deletion operations.

Traversal: Binary trees can be traversed in various ways, such as in-order, pre-order, post-order, and level-order traversal. Each traversal method visits the nodes of the tree in a specific order.

Types: Binary trees can take various forms depending on their structure, including:
 - Complete Binary Trees: Every level of the tree is completely filled, except possibly the last level,
   which is filled from left to right.
 - Full Binary Trees: Every node other than the leaves has two children.
 - Perfect Binary Trees: A binary tree that is both complete and full.

Applications: Binary trees have many applications in computer science, including binary search trees (BSTs) for efficient searching, expression trees for representing mathematical expressions, and Huffman trees for data compression.
   
 */

/** ----------- Types of binary Tree ------------ */
/**
 * ? 1. Perfect Binary Tree 
 
                 A
                / \
               B   C
              / \ / \
             D  E F  G
             
All levels are completely filled: Every level of the tree, except possibly the last, is completely filled. This means that every node, except possibly the nodes on the last level, has two children.

All leaves are at the same depth: The depth or height of the tree is the maximum distance from the root to any leaf node. In a perfect binary tree, all leaves are at the same depth, so the depth of the tree is the same for all paths from the root to a leaf.

Number of nodes: If the height of the perfect binary tree is h, then the total number of nodes in the tree is 2^(h+1) - 1. This is derived from the fact that each level doubles the number of nodes, starting with 1 node at the root.

Balanced structure: A perfect binary tree is inherently balanced. This means that the heights of the left and right subtrees of any node differ by at most one, ensuring efficient operations like searching, insertion, and deletion.

Efficient for storing data: Due to its balanced structure, a perfect binary tree is efficient for storing sorted data. It ensures that the tree remains balanced during insertion and deletion operations, leading to optimal performance for various algorithms and operations.

Space efficiency: While the number of nodes in a perfect binary tree grows exponentially with its height, it is still more space-efficient compared to other types of binary trees for the same number of nodes. This is because a perfect binary tree achieves maximum density, packing as many nodes as possible at each level.
 */