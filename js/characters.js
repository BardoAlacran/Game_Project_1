class Player {
    constructor (hp, posX, posY, direction = 'up') {
        this.hp = hp;
        this.posY = posY;
        this.posX = posX;
        this.direction = direction;
    }
    attack(){
        console.log(`attack initiated`);
    };
    
    up(){
        
        this.posY-=1;  
    }
    left(){
        
        this.posX-=1;
    }
    right(){
        
        this.posX+=1;
    }
    down(){
        
        this.posY+=1;
    }
};
