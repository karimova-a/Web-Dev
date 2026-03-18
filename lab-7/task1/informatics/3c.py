import math

a = int(input())
b = int(input())

count = 0
for i in range(a, b+1):
    if math.isqrt(i) ** 2 == i:
        count+=1
        
print(count)