import sys

def extract_strings(filename):
    with open(filename, 'rb') as f:
        data = f.read()
    strings = []
    current_string = []
    for byte in data:
        if 32 <= byte <= 126 or byte in (10, 13, 9):
            current_string.append(chr(byte))
        else:
            if len(current_string) >= 10:
                strings.append(''.join(current_string))
            current_string = []
    if len(current_string) >= 10:
        strings.append(''.join(current_string))
    return '\n'.join(strings)

with open('hoobe.txt', 'w') as f:
    f.write(extract_strings('/Users/nezih/.gemini/antigravity/conversations/ee38ee77-9ebc-45ff-8acb-1c096de0cb16.pb'))
with open('proj.txt', 'w') as f:
    f.write(extract_strings('/Users/nezih/.gemini/antigravity/conversations/5076fd85-387a-425d-a0cb-54276930e839.pb'))
