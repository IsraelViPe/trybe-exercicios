const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const random = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
const dragonDamage = (dragon) => {
  const dragonAtack = random(15, dragon.strength);
  return dragonAtack;
};


const warriorDamage = (warrior) => {
  const warriorAtack = random(
    warrior.strength,
    warrior.strength * warrior.weaponDmg
  );
  return warriorAtack;
};


const mageDamage = (mage) => {
  const mageAtack = random(mage.intelligence, mage.intelligence * 2);
  const turnMana = 15;
  const mageStatus = {
    manaSpent: 0,
    damageStatus:  "Não possui mana suficiente",
  };
  if (mage.mana > 15 ) {
    mageStatus.manaSpent += turnMana;
    mageStatus.damageStatus = mageAtack;
  }
  return mageStatus;
};
console.log(mageDamage(mage));



  const gameActions = {
    warriorTurn : (warriorDamage) => {
        const warriorAtack = warriorDamage(warrior);
        dragon.healthPoints -= warriorAtack ;
        warrior.damage = warriorAtack ;
    },

    mageTurn : (mageDamage) => {
        const mageTurnStats = mageDamage(mage);
        const Damage = mageTurnStats.damageStatus;
        mage.damage = Damage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= Damage;
        
    },
  };
//   gameActions.warriorTurn(warriorDamage);
  console.log(gameActions.mageTurn(mageDamage), dragon.healthPoints );
  