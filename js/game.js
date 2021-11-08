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
        
        this.ctx.fillRect(this.player.posY, this.player.posX, 50, 50);
    }

    _drawWorld() {

        this.map.forEach((y,indexY) => {
            y.forEach((x, indexX )=> {
                switch (x) {
                    case "r":
                        this.ctx.fillStyle = 'brown';
                        this.ctx.fillRect(indexY*50,indexX*50, 50, 50);
                        break;
                    case "f":
                        this.ctx.fillStyle = 'grey'
                        this.ctx.fillRect(indexY*50,indexX*50, 50, 50);
                        break;
                    case "d":
                        this.ctx.fillStyle = 'green';
                        
                        this.ctx.fillRect(indexY*50,indexX*50, 50, 50);
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
                    this.player.up();
                    console.log('up?')
                    break;
                case "ArrowDown":
                    this.player.down();
                    console.log('down?')
                    break;
                            
                case "ArrowLeft":
                    this.player.left();
                    console.log('left?')
                    break;
                                    
                case "ArrowRight":
                    this.player.right();
                    console.log('right?')
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