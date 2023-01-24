class IceCreamMachine:
    
    def __init__(self, ingredients, toppings):
        self.ingredients = ingredients
        self.toppings = toppings
        
    def scoops(self):
        self.iceCream = []
        if not self.ingredients:
            return []
        if not self.toppings:
            return []
        for ing in self.ingredients:
            for top in self.toppings:
                self.iceCream.append([ing, top])
        return self.iceCream

machine = IceCreamMachine(["vanilla", "chocolate"], ["chocolate sauce", "pista"])
print(machine.scoops())
#should print: [['vanilla', 'chocolate sauce'], ['chocolate', 'chocolate sauce']]