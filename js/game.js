class Game {
    constructor(options, callback){
        this.ctx = options.ctx;
        this.player = options.player;
        this.rows = options.rows;
        this.columns = options.columns;
        this.map = options.map;
        this.callback = callback;
    }
    _clean(){
        this.ctx.fillStyle = "white",
        
        this.ctx.fillRect(0, 0, 500, 500);

    }

    _drawPlayer(){
        this.ctx.fillStyle = 'pink';
        console.log(this.player);
        this.ctx.fillRect(this.player.posY, this.player.posX, 50, 50);
    }

    _drawWorld() {
        console.log('world') 
        this.map.forEach(arrayRows => {
            arrayRows.forEach(arrayColumns => {
                switch (arrayColumns) {
                    /*case "r":
                        this.ctx.fillStyle = 'brown';
                        this.ctx.fillRect(this.map.arrayRows * 50, this.map.arrayColumns * 50, 50, 50);
                        break;
                    case "f":
                        this.ctx.fillStyle = 'grey'
                        this.ctx.fillRect(this.rows * 50, this.columns * 50, 50, 50);
                        break;*/
                    case "d":
                        this.ctx.fillStyle = 'green';
                        this.ctx.fillRect( * 50,  * 50, 50, 50);
                    default:
                        break;
                }                
            });
        });
    }

    _controls(){
        document.addEventListener('keydown', (event) =>{
            switch (event.code) {
                case "ArrowUp":
                    this.soldier.Up();
                    break;
                case "ArrowDown":
                    this.soldier.Down();
                    break;
                            
                case "ArrowLeft":
                    this.soldier.Left();
                    break;
                                    
                case "ArrowRight":
                    this.soldier.Right();
                    break;
                    default:
                    break;
            }
        });
    }
    _update(){
        this._clean()
        this._drawWorld()
        this._drawPlayer()
        //añadir todas las functiones de Game.

        
        window.requestAnimationFrame(this._update.bind(this));
    };

    start() {
        this._controls()
        window.requestAnimationFrame(this._update.bind(this));
        
    }
};