#use recursion to det. whether a string is a palindrome

def isPalindrome(str):
	def toChars(str):
		s = s.lower()
		ans = ''
		for char in str:
			if char in 'abcdefghijklmnopqrstuvwxyz':
				ans = ans + c
		return ans

def isPal(str):
	if len(str) <= 1:
		return True
	else:
		return str[0] == str[-1] and isPal(str[1:-1])

return isPal(toChars(str))