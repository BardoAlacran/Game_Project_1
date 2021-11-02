# Game_Project_1

# Project's name:

The Gaia's Army: The code of time.

## Description:

Gaia is loosing power to keep the world safe due to the loss of The Time Code. Our hero, a nameless warrior, must face an unknown army to recover the code.

## MVP:

- To have a splash screen
- To have a start button
- To have a Game over (1 for winning, 1 for loosing)
- To be able to die & kill.
- All in one "image".

## Backlog/nice to have

- From melee to distance attack.
- 2 different classes plus a third one based on the enemy class (that will be the boss class.)
- At least 2 different weapons with their respective effects.
- To define random movements for the enemies.
- To define a map with elements that cant be destroyed, items you can't pass through.
- A tank. A tank is always good.

## Data structure

```javascript
class Soldier {
    constructor (hp, direction, weapon){
    this.hp = hp;
    this.direction = direction;
    this.weapon = weapon;
    }
    //Methods 
    _attack()
    _reload() 
    _move()
}
class Hero extends Soldier {
    constructor (hp, direction, weapon, level){
        super(hp,direction, weapon);
        this.level = level;
    }
    _changeWeapon()
}
class Enemy extends Soldier {
    constructor (hp, direction, weapon){
        super(hp,direction, weapon);
    }
}
class Boss extends Soldier {
    constructor (name, hp, direction, weapon, passive){
        super(hp,direction, weapon);
        this.name = name;
        this.passive = passive;
    }
    _changeweapon()
    _dash()
    _recover(){
        //every 10s heals himself 5hp
    }
}
const Stan = new Boss (`Stan the Razor`, 50,` `, `Laser Gun`, `I enjoy the Killing`);
```
