def lengthOfLongestSubstring(s):
  """
  :type s: str
  :rtype: int
  """
  max_length, i, j = 0, 0, 0
  string_set = set()
  while i < len(s):
    if s[i] not in string_set:
      string_set.add(s[i])
      max_length = max(len(string_set), max_length)
      i = i+1
    else:
      string_set.remove(s[j])
      j = j+1
  return max_length

# Test
lenStr = lengthOfLongestSubstring("abcabcbb")
assert lenStr == 3

lenStr = lengthOfLongestSubstring("pwwkew")
assert lenStr == 3
