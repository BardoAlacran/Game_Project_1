class Player {
    constructor (hp, posY = 50, posX = 50) {
        this.hp = hp;
        this.direction = 'front';
        this.posY = posY;
        this.posX = posX;
    }
    attack(){
        console.log(`attack initiated`);
    };
    move(){};
};