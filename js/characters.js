class Soldier {
    constructor (posX= 0, posY = 0, direction ="up", hp, weapon, ammo){
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
    this.hp = hp;
    this.weapon = weapon;
    this.ammo = ammo;
    }
    /*attack()
    reload()*/

    _Forward(){
        switch (this.direction) {
            case "up":
                this.posY--;
                break;
            case "left":
                this.posX--;
                break;
            case "right":
                this.posX++;
                break;
            case "down":
                this.posY++;
                break;
        }   
    }
    Up(){
        switch (this.direction) {
            case "up":
                this.direction = "up"
                break;
            case "left":
                this.direction = "up"
                break;
            case "right":
                this.direction = "up"
                break;
            case "down":
                this.direction = "up"
                break;
                default:
                break;
        }
    }
    Left(){
        switch (this.direction) {
            case "up":
                this.direction = "left"
                break;
            case "left":
                this.direction = "left"
                break;
            case "right":
                this.direction = "left"
                break;
            case "down":
                this.direction = "left"
                break;
                default:
                break;
        }
    }
    Right(){
        switch (this.direction) {
            case "up":
                this.direction = "right"
                break;
            case "left":
                this.direction = "right"
                break;
            case "right":
                this.direction = "right"
                break;
            case "down":
                this.direction = "right"
                break;
                default:
                break;
        }
    }
    Down(){
        switch (this.direction) {
            case "up":
                this.direction = "down"
                break;
            case "left":
                this.direction = "down"
                break;
            case "right":
                this.direction = "down"
                break;
            case "down":
                this.direction = "down"
                break;
                default:
                break;
        }
    }
}
const stan = new Soldier (50, 50, "up", 50,`Shootgun`, 10);
/*class Hero extends Soldier {  
    constructor (posX= 50, posY = 50, direction ="N", hp, weapon, ammo, level){
        super(posX, posY, direction, hp, weapon, ammo);
        this.level = level;
    }
    changeWeapon()
};
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
*/