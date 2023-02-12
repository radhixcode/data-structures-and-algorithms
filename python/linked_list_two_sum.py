# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        carry = 0
        result = ListNode(0)
        pointer = result
        while l1 or l2 or carry:
            firstnum = l1.val if l1 else 0
            secondnum = l2.val if l2 else 0
            sum = firstnum+secondnum+carry
            num = sum % 10
            carry = sum//10
            pointer.next = ListNode(num)
            pointer = pointer.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return result.next

def getAsList(n):
    tempList = []
    while n:
        tempList.append(n.val)
        n = n.next
    return tempList

# Test  
llNode1 = ListNode(2)
llNode1.next = ListNode(4)
llNode1.next.next = ListNode(3)

llNode2 = ListNode(5)
llNode2.next = ListNode(6)
llNode2.next.next = ListNode(4)

sum = getAsList(Solution().addTwoNumbers(llNode1,llNode2))
assert sum == [7, 0, 8]
