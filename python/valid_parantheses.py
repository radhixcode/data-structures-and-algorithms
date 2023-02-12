def isValid(s):
    """
    :type s: str
    :rtype: bool
    """
    stack = []
    para_map = {"}": "{", "]": "[", ")": "("}
    for char in s:
        if char in para_map:
            top_ele = stack.pop() if stack else "#"
            if para_map[char] != top_ele:
                return False
        else:
            stack.append(char)
    return not stack

# Test
checkValidPara = isValid("([])")
assert checkValidPara == True

checkValidPara = isValid("([][)")
assert checkValidPara == False
