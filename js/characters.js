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
