import collections

Node = collections.namedtuple('Node', ['left', 'right', 'value'])

def contains(root, value):
    if root.value == value:
        return True
    elif root.value < value:
        if root.right == None:
            return False
        else:
            return contains(root.right, value)
    else:
        if root.left == None:
            return False
        else:
            return contains(root.left, value)

# Test      
n1 = Node(value=1, left=None, right=None)
n3 = Node(value=3, left=None, right=None)
n2 = Node(value=2, left=n1, right=n3)

searchVal = contains(n2, 33)
assert searchVal == False

searchVal = contains(n2, 3)
assert searchVal == True
