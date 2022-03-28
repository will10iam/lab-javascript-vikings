// Soldier
class Soldier {
  constructor ( health, strength ) { 
    this.health = health,
    this.strength = strength
    this.attack = function() {
      return this.strength
    }

    this.receiveDamage = function(Damage) {
      this.health -= Damage
     }
   }
 }

// Viking
class Viking extends Soldier {
  constructor (name,health,strength ) {
    super (health,strength)
    this.name = name
    this.receiveDamage = function(Damage) {
      this.health -= Damage
      
    if (this.health > 0) {
      return `${this.name} has received ${Damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  this.attack = function() {
    return this.strength
  }
 this.battleCry = function() {
   return 'Odin Owns You All!';
 }
}
}


// Saxon
class Saxon extends Soldier {
  constructor (name,health,strength ) {
    super (health,strength)

    this.attack = function() {
      return this.strength
    }
  
  this.receiveDamage = function(Damage) {
    this.health -= Damage
    if (this.health > 0) {
      return `A Saxon has received ${Damage} points of damage`
    } else {
      return 'A Saxon has died in combat'
      }
    }
  } 
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addviking(viking) {
    this.vikingArmy.push(viking)
  }

  addsaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
