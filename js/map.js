const map = [
    [`r`,`r`,`r`,`r`,`d`,`d`,`r`,`r`,`r`,`r`],
    [`r`,`f`,`f`,`f`,`f`,`f`,`f`,`f`,`f`,`r`],
    [`r`,`f`,`r`,`f`,`r`,`r`,`r`,`f`,`r`,`r`],
    [`r`,`f`,`f`,`f`,`f`,`f`,`f`,`f`,`f`,`r`],
    [`r`,`r`,`r`,`f`,`f`,`r`,`f`,`r`,`r`,`r`],
    [`r`,`f`,`f`,`f`,`f`,`r`,`f`,`f`,`f`,`r`],
    [`r`,`r`,`r`,`r`,`f`,`f`,`f`,`f`,`f`,`r`],
    [`r`,`f`,`f`,`f`,`f`,`f`,`r`,`f`,`f`,`r`],
    [`r`,`f`,`f`,`f`,`f`,`f`,`r`,`f`,`f`,`r`],
    [`r`,`r`,`r`,`r`,`d`,`d`,`r`,`r`,`r`,`r`],
];

class Pepe {
    constructor(name, posx, posy){
        this.name = name;
        this.posx = posx;
        this.poxy = posy;
    }
}

const muchosPepes = [
    new Pepe('pepe1', 10, 15),
    new Pepe('pepe2', 20, 25)
]


function valores(){
    muchosPepes.forEach(pepe => {
        console.log(pepe.name, pepe.posx, pepe.posy)
    })
}
