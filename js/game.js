class Game {
    constructor(options, callback){
        this.ctx = options.ctx;
        this.player = options.player;
        this.rows = options.rows;
        this.columns = options.columns;
        this.map = options.map;
        this.enemy = [];
        this.gameover = false;
        this.callback = callback;
    }
    _clean(){
        this.ctx.fillStyle = "white",
        
        this.ctx.fillRect(0, 0, 500, 500);

    }

    _drawPlayer(){
        this.ctx.fillStyle = 'pink';
        
        this.ctx.fillRect(this.player.posX*50, this.player.posY*50, 50, 50);
    }
    _generateEnemy(){
        this.enemy.push(new Enemy(5, 5, 1, 'down')),
        this.enemy.push(new Enemy(5, 1, 8, 'down')),
        this.enemy.push(new Enemy(5, 8, 8, 'down')),
        this.enemy.push(new Enemy(5, 1, 3, 'down')),
        this.enemy.push(new Enemy(5, 8, 3, 'down')),
        this.enemy.push(new Enemy(5, 1, 5, 'down'))
    }
    _drawEnemy(){
        this.enemy.forEach((enemyPos) => {
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(enemyPos.posX*50, enemyPos.posY*50, 50, 50);
            
        });
    }
    _drawWorld() {
        this.map.forEach((y,indexY) => {
            y.forEach((x, indexX )=> {
                switch (x) {
                    case "r":
                        this.ctx.fillStyle = 'brown';
                        this.ctx.fillRect(indexX*50,indexY*50, 50, 50);
                        break;
                    case "f":
                        this.ctx.fillStyle = 'grey'
                        this.ctx.fillRect(indexX*50,indexY*50, 50, 50);
                        break;
                    case "d":
                        this.ctx.fillStyle = 'green';
                        
                        this.ctx.fillRect(indexX*50,indexY*50, 50, 50);
                    default:
                        break;
                }                
            });
        });
    }
    _canIMoveToNextPosition(nextPositionY, nextPositionX){
        return this.map[nextPositionY][nextPositionX] !== 'r';
    }
    _checkCollisionWithEnemy(nextPositionY, nextPositionX){
        return this.enemy.some(function(enemy){
            return enemy.posY === nextPositionY && enemy.posX === nextPositionX;
        })        
    }
    _identifyEnemy(nextPositionY, nextPositionX){
        return this.enemy.findIndex((enemy) => {
            return enemy.posY === nextPositionY && enemy.posX === nextPositionX
        }) 
    }

    _controls(){
        document.addEventListener('keydown', (event) =>{
            switch (event.code) {
                case "ArrowUp":
                    if (this._checkCollisionWithEnemy(this.player.posY-1, this.player.posX) === false && this._canIMoveToNextPosition(this.player.posY-1, this.player.posX)){
                        this.player.up();
                    }
                    break;
                case "ArrowDown":
                    if (this._checkCollisionWithEnemy(this.player.posY+1, this.player.posX) === false && this._canIMoveToNextPosition(this.player.posY+1, this.player.posX)){
                        this.player.down();
                    }
                    break;
                            
                case "ArrowLeft":
                    if (this._checkCollisionWithEnemy(this.player.posY, this.player.posX-1) === false && this._canIMoveToNextPosition(this.player.posY, this.player.posX-1)){
                        this.player.left();
                    }
                    break;
                                    
                case "ArrowRight":
                    if (this._checkCollisionWithEnemy(this.player.posY, this.player.posX+1) === false && this._canIMoveToNextPosition(this.player.posY, this.player.posX+1)){
                        this.player.right();
                    }
                    break;
                case "KeyA":

                    if (this._identifyEnemy(this.player.posY-1, this.player.posX) || this._identifyEnemy(this.player.posY+1, this.player.posX) || this._identifyEnemy(this.player.posY, this.player.posX-1) || this._identifyEnemy(this.player.posY, this.player.posX+1)) {
                        let identified = this._identifyEnemy(this.player.posY, this.player.posX-1)
                        this.enemy.splice(identified, 1);
                        console.log('a la mierda');
                    } 
                
                     //cuando le doy vuelve a su pposición inicial. (el problema era el keydown Space, al pasarlo a A no ocurre.)
                   // this.player.attack();
                    break;
                    default:
                    break;
            }
        });
    }
    gameOver(){
        if (this.enemy.length === 0) {
            this.gameover = true;
        }
    }
    _update(){
        this._clean()
        this._drawWorld()
        
        this._drawEnemy()
        this._drawPlayer()
        this.gameOver()
        //añadir todas las functiones de Game.
        //añadir una función game over como método de Game, que ejecute un condicional y se vincula a una propiedad de Main.
        
        window.requestAnimationFrame(this._update.bind(this));
    };

    start() {
        this._controls()
        this._generateEnemy()
        
        window.requestAnimationFrame(this._update.bind(this));
        
    }
};