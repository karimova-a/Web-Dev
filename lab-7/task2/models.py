class Animal:
    def __init__(self, name: str, age: int, color: str):
        self.name = name 
        self.age = age
        self.color = color
    
    def speak(self) -> str:
        return "Some generic animal sound"
    
    def info(self) -> str:
        return f"{self.name} is a {self.color} animal, {self.age} years old"
    
    def __str__(self) -> str:
        return f"Animal (name = {self.name}, age = {self.age}, color = {self.color})"
    
    

class Dog(Animal):
    def __init__(self, name: str, age: int, color: str, breed: str):
        super().__init__(name, age, color)
        self.breed = breed
        
    def speak(self) -> str:
        return "Woof"
    
    def wag_tail(self) -> str:
        return f"{self.name} is wagging tail"
    
    def __str__(self) -> str:
        return f"Dog (name = {self.name}, age = {self.age}, color = {self.color}, breed = {self.breed})"
    
    
class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, indoor: bool = True):
        super().__init__(name, age, color)
        self.indoor = indoor
    
    def speak(self) -> str:
        return "Meow"
    
    def scratch_furniture(self) -> str:
        return f"{self.name} is scratching "
    
    def __str__(self) -> str:
        indoor_status = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, type={indoor_status})"