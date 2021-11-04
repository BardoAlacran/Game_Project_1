document.addEventListener('DOMContentLoaded', () =>{

    function splashScreen (){
        const splash = document.querySelector('splash');
        
        const play = document.querySelector('#play');
        play.addEventListener('click' () => {
            const game = document.querySelector('#game');
        
        const start = game.querySelector('#start');
            start.addEventListener('click' () =>{
                const canvas = document.querySelector('#canvas');
                const ctx = canvas.getContext('2d'); 
            })
        })
    }
    splashScreen(); 
});

/*const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");


ctx.fillStyle = 'purple';
ctx.fillRect(10, 10, 50, 50)

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'purple';
ctx.fillRect(10, 10, 50, 50);*/