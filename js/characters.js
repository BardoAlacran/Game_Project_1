class Player {
    constructor (hp, posY = 50, posX = 50, direction = 'up') {
        this.hp = hp;
        this.posY = posY;
        this.posX = posX;
        this.direction = direction;
    }
    attack(){
        console.log(`attack initiated`);
    };
    
    up(){
        console.log('up pressed');
        this.posX-=50;  
    }
    left(){
        console.log('up pressed');
        this.posY-=50;
    }
    right(){
        console.log('up pressed');
        this.posY+=50;
    }
    down(){
        console.log('up pressed');
        this.posX+=50;
    }
};
