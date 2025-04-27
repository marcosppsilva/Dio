function matriz(){
    let frutas = []
    frutas = [
                ["Maçã", 100],
                ["Banana", 250],
                ["Pera", 380]
            ]

    for (let i = 0; i < frutas.length; i++){
        for(let j = 0; j < frutas[i].length; j++){
        console.log(frutas[i][j])
    }
    }
}

matriz()