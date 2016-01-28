
#use recursion to determine length of string.

def lenRecur(aStr):
    '''
    aStr: a string
    
    returns: int, the length of aStr
    '''
    # Your code here
    if aStr == "" : 
        return 0
    if aStr[0] == aStr[0:]:
        return 1
        
    return 1 + lenRecur(aStr[1:])
