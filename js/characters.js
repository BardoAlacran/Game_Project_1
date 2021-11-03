class Soldier {
    constructor (posX= 0, posY = 0, direction ="N", hp, weapon, ammo){
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
    this.hp = hp;
    this.weapon = weapon;
    this.ammo = ammo;
    }
    attack()
    reload()
    Forward(){
        switch (this.direction) {
            case "N":
                this.posY--;
                break;
            case "E":
                this.posX++;
                break;
            case "S":
                this.posY++;
                break;
            case "W":
                this.posY--;
                break;
        }   
    }
    Left() {
        switch (this.direction) {
          case "N":
            this.direction = "W";
            break;
          case "E":
            this.direction = "N";
            break;
          case "S":
            this.direction = "E";
            break;
          case "W":
            this.direction = "S";
            break;
          default:
            break;
        }
    }
    Right() {
        switch (this.direction) {
          case "N":
            this.direction = "E";
            break;
          case "E":
            this.direction = "S";
            break;
          case "S":
            this.direction = "W";
            break;
          case "W":
            this.direction = "N";
            break;
          default:
            break;
        }
    }
}
class Hero extends Soldier {
    constructor (posX= 50, posY = 50, direction ="N", hp, weapon, ammo, level){
        super(posX, posY, direction, hp, weapon, ammo);
        this.level = level;
    }
    changeWeapon()
}
/*class Enemy extends Soldier {
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
*/