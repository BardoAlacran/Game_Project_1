document.addEventListener('DOMContentLoaded', () =>{})
function splashScreen () {
    const playButton = document.querySelector('#play');
    playButton.addEventListener('click', () =>{
        const splash = document.querySelector('#splash');
        splash.classList.add('hidden');
        const game = document.querySelector('#game');
        game.classList.remove('hidden');
    });

        const startButton = document.querySelector('#start');
        startButton.addEventListener('click', ()=>{
            const gameover = document.querySelector('#gameover');
            gameover.classList.remove('hidden');
            game.classList.add('hidden');
        });

    
        const gameoverButton = document.querySelector('#gameoverButton');
        gameoverButton.addEventListener('click', ()=>{
            splash.classList.remove('hidden');
            gameoverButton.classList.add('hidden');
            
        }); 
};
splashScreen();
//ahora a la segunda vez que sale start, no aparece game over button. He de intentar que sí aparezca y la función sea un bucle.

/*[['G','R','G'],['G','G','G'],['G','G','G']]*/