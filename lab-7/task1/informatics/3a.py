a = int(input())
b = int(input())

evens = []
for i in range(a, b + 1):
    if i % 2 == 0:
        evens.append(str(i))
        
print(' '.join(evens))