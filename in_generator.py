from random import randint

def input1(name):
    seq1=""
    lenstr = randint(30, 100)
    while len(seq1) < lenstr:
        seq1 += name[randint(0, len(name)-1)]
    print(seq1, len(seq1))

input1("MOHAMMADAREEBSIDDIQUI")
input1("MAHAMSHAKIR")

def input2():
    lenarr = randint(0, 100)
    arr = []
    while len(arr) < lenarr:
        arr.append(randint(30, 100))
    print(arr)

input2()

def input3():
    numpts = randint(10, 100)
    pts = []
    while len(pts) < numpts:
        pts.append({"w": randint(1, 100), "v": randint(1, 100)})
    print(pts)

input3()

def input4():
    lenarr = randint(0, 100)
    arr = []
    while len(arr) < lenarr-3:
        arr.append(randint(30, 100))
    arr.extend([0, 6, 2])
    print(arr)

input4()