export class Monster {
constructor(health, strength,x,y) {
    this.name = "Monster";
    this.health = health;
    this.strength = strength;
    this.x = x;
    this.y = y;


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
getCoordinates() {
    return [this.x, this.y];
}
printStats() {
    console.log(`Name: ${this.name}\nHealth: ${this.hp}\nStrength: ${this.strength}`);
}



}



