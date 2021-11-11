document.addEventListener('DOMContentLoaded', () => { 
    function splashScreen() {
        const playButton = document.querySelector('#play');
        playButton.addEventListener('click', () => {
            const splash = document.querySelector('#splash');
            splash.classList.add('hidden');
            const game = document.querySelector('#game');
            game.classList.remove('hidden');
        });
    
        const startButton = document.querySelector('#start');
        console.log(startButton)
        startButton.addEventListener('click', () => {
            console.log('click')
            const canvas = document.querySelector('#canvas');
            const ctx = canvas.getContext('2d');
            const gaiaGame = new Game(
                {
                    ctx: ctx,
                    rows: canvas.width / 10,
                    columns: canvas.height / 10,
                    map: map,
                    //enemy: [],
                    player: new Player(5, 4, 9, 50, 50, 5),
                },
            );
            gaiaGame.start()
    
            const gameover = document.querySelector('#gameover');
            gameover.classList.remove('hidden');
        });
    
        const gameoverButton = document.querySelector('#gameoverButton');
        gameoverButton.addEventListener('click', () => {
            splash.classList.remove('hidden');
            gameoverButton.classList.add('hidden');
    
        });
    
    
    
    };
    
    splashScreen();
    console.log("load");
})

//ahora a la segunda vez que sale start, no aparece game over button. He de intentar que sí aparezca y la función sea un bucle.