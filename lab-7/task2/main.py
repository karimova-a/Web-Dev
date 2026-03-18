from models import Animal, Dog, Cat

def main():
    generic_animal = Animal("Unknown", 5, "brown")
    dog = Dog("Buddy", 3, "golden", "Golden Retriever")
    cat = Cat("Whiskers", 2, "gray", indoor=True)

    animals = [generic_animal, dog, cat]
    
    for animal in animals:
        print(animal)
        print(f"  Info: {animal.info()}")
        print(f"  Sound: {animal.speak()}")
        if isinstance(animal, Dog):
            print(f"  Dog special: {animal.wag_tail()}")
        elif isinstance(animal, Cat):
            print(f"  Cat special: {animal.scratch_furniture()}")
        print("-" * 40)

if __name__ == "__main__":
    main()