
class Player {
    constructor(name) {
        this.hp = 100;
        this.name = name;
        this.strength = 10;
        this.inventory = [];
        this.x = 0;
        this.y = 0;
    }


    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    isAlive() {
        return this.health !== 0;
    }

    reduceHealth(health) {
        this.health -= health;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    attack(opponent) {
        console.log(`${this.name} attacked ${opponent.name}!`);
        opponent.reduceHealth(this.strength);
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];
        switch (potion.name) {
            case 'STR':
                this.strength += 5;
                break;
            case 'HP':
                this.hp += 10;
                break;
        }
    }

    getCordinates() {
        return [this.x, this.y];
    }


    printStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.hp}\nStrength: ${this.strength}`);
    }
}