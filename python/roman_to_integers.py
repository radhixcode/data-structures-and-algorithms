def romanToInt(s):
    """
    :type s: str
    :rtype: int
    """
    roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    sum = 0
    for i in range(len(s)-1):
        currentS = roman[s[i]]
        nextS = roman[s[i+1]]
        if nextS > currentS:
            sum -= currentS
        else:
            sum += currentS
    return sum + roman[s[-1]]


# Test
integer = romanToInt("LVIII")
assert integer == 58

integer = romanToInt("MCMXCIV")
assert integer == 1994