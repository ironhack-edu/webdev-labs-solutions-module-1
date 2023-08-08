// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(amountOfDamage) {
    this.health -= amountOfDamage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength); // invoke constuctor in the parent class
    this.name = name;
  }
  receiveDamage(amount) {
    super.receiveDamage(amount); // invoke the method receiveDamage() of the parent class
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}


// Saxon
class Saxon extends Soldier {
  receiveDamage(amount) {
    super.receiveDamage(amount); // invoke the method receiveDamage() of the parent class
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}


// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  genericAttack(attackingArmy, defendingArmy) {

    // select a random soldier from the attacking army
    const randomAttackerIndex = Math.floor(Math.random() * attackingArmy.length);
    const randomAttacker = attackingArmy[randomAttackerIndex];

    // select a random soldier from the defending army
    const randomDefenderIndex = Math.floor(Math.random() * defendingArmy.length);
    const randomDefender = defendingArmy[randomDefenderIndex];

    // perform attack
    const amountOfTheAttack = randomAttacker.attack();
    const result = randomDefender.receiveDamage(amountOfTheAttack);

    // if the defender has died, remove it from the army
    if (randomDefender.health <= 0) {
      defendingArmy.splice(randomDefenderIndex, 1);
    }

    return result;
  }
  vikingAttack() {
    // viking attacks saxon
    return this.genericAttack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    // saxon attacks viking
    return this.genericAttack(this.saxonArmy, this.vikingArmy);
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

