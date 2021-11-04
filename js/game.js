class Game {
    constructor(sets){
        this.ctx = sets.ctx;
        this.hero = sets.hero;
    }
    _drawHero(){
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(150, 150, 10, 10);
    }
    _drawEnemyes(){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(, , 10, 10)
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
                    this.hero.Up
                    break;
                case "ArrowDown":
                    this.hero.Down
                    break;
                            
                case "ArrowLeft":
                    this.hero.Left
                    break;
                                    
                case "ArrowRight":
                    this.hero.Right
                    break;
                    default:
                    break;
            }
        })
        
    }
    start(){
        this._controls();
        
    }
}