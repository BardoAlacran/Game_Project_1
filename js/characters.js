class Player {
    constructor (hp, posX, posY, direction = 'up', damage) {
        this.hp = hp;
        this.posY = posY;
        this.posX = posX;
        this.direction = direction;
        this.damage = damage;
    }
    attack(){
        console.log('player method activated')
        return this.damage;
    };
    receiveDamage(damage){
        this.hp-= damage;
    }
    
    up(){
        this.direction = 'up'
        this.posY-=1;  
    }
    left(){
        this.direction = 'left'
        this.posX-=1;
    }
    right(){
        this.direction = 'right'
        this.posX+=1;
    }
    down(){
        this.direction = 'down'
        this.posY+=1;
    }
};
class Enemy extends Player {
    constructor(hp, posX, posY, direction){
        super(hp, posX, posY, direction);
    }
}
