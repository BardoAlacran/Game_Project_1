class Game {
    constructor(options, callback){
        this.ctx = options.ctx;
        this.player = options.player;
        this.rows = options.rows;
        this.columns = options.columns;
        this.map = options.map;
        this.enemy = [];
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
    _drawEnemy(){
        this.enemy.forEach((enemyPos) => {
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(enemyPos.posX*50, enemyPos.posY*50, 50, 50);
            
        });
        //this.ctx.fillStyle = 'blue';
        //this.ctx.fillRect(this.enemy.posX*50, this.enemy.posY*50, 50, 50);
    }
    _generateEnemy(){
        this.enemy.push(new Enemy(5, 1, 8, 'down'));
        this.enemy.push(new Enemy(5, 8, 8, 'down'));
        this.enemy.push(new Enemy(5, 1, 3, 'down'));
        this.enemy.push(new Enemy(5, 8, 3, 'down'));
        this.enemy.push(new Enemy(5, 5, 1, 'down'));
        this.enemy.push(new Enemy(5, 1, 5, 'down'));
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
    //una función para que si está en Y0 no pueda ir más arriba, Y50 no pueda más abajo, etc.
    _controls(){
        document.addEventListener('keydown', (event) =>{
            switch (event.code) {
                case "ArrowUp":
                    console.log("posy", this.player.posX, "posx", this.player.posY);
                    console.log(this.map[this.player.posX][this.player.posY-1], this._canIMoveToNextPosition(this.player.posX, this.player.posY-1))
                    if(this._canIMoveToNextPosition(this.player.posY-1, this.player.posX)){
                        this.player.up();
                    }
                    break;
                case "ArrowDown":
                    if (this._canIMoveToNextPosition(this.player.posY+1, this.player.posX)){
                    this.player.down();
                    }
                    break;
                            
                case "ArrowLeft":
                    if (this._canIMoveToNextPosition(this.player.posY, this.player.posX-1)){
                        this.player.left();
                    }
                    break;
                                    
                case "ArrowRight":
                    if (this._canIMoveToNextPosition(this.player.posY, this.player.posX+1)){
                        this.player.right();
                    }
                    break;
                case "Space":
                    this.player.attack();
                    default:
                    break;
            }
        });
    }
    _update(){
        this._clean()
        this._drawWorld()
        this._generateEnemy()
        this._drawEnemy()
        this._drawPlayer()
        //añadir todas las functiones de Game.

        
        window.requestAnimationFrame(this._update.bind(this));
    };

    start() {
        this._controls()
        window.requestAnimationFrame(this._update.bind(this));
        
    }
};