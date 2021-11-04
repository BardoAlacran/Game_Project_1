class Game {
    constructor(sets){
        this.ctx = sets.ctx;
        this.soldier = sets.soldier;
    }
    _drawHero(){
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(150, 150, 10, 10);
    }
    _drawEnemyes(){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(20, 20, 10, 10)
        //los enemigos estarán posicionados en sitios concretos para que no coincidan con los elementos de mapa.
    }
    _drawElements(){
        this.ctx.fillStyle = 'brown';
        
        //quiero hacer elementos que sean cuadrados, así juntar algunos para hacer paredes, o hacer otras cosas. Los elementos no estarán posicionados aleatoriamente.
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
    start(){
        this._controls();
        this._drawHero();
    }
}