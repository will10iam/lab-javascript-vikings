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
  
 this.battleCry = function() {
   return 'Odin Owns You All!';
 }
}
}


// Saxon
class Saxon extends Soldier {
  constructor (health,strength ) {
    super (health,strength)

  
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
  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }


vikingAttack() {
  let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[randomVikingIndex];

  let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[randomSaxonIndex];

  let vikingHit = randomSaxon.receiveDamage(randomViking.attack());

  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1);
  }
return vikingHit;
  }


  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let saxonHit = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return saxonHit;
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return 'Vikings have won the war of the century!'
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
