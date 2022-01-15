function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount,EaterCount, EatCount,MulCount){
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) { 
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < EaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < EatCount; i++) {
            let x = Math.floor((random(matrixSize)));
            let y = Math.floor((random(matrixSize)));
            matrix[y][x] = 4;
        }
        for (let i = 0; i < MulCount; i++) {
            let x = Math.floor((random(matrixSize)));
            let y = Math.floor((random(matrixSize)));
            matrix[y][x] = 5;
        }
      
    }
    matrixGenerator(20, 15, 2, 2, 5,5);
    
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1){
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2){
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3){
                let eat = new Eater(x, y);
                EaterArr.push(eat);  
            }
            else if (matrix[y][x] == 4){
                let eeat  = new Eat(x, y);
                EatArr.push(eeat);  
            }
            else if (matrix[y][x] == 5){
                let mul  = new Mul(x, y);
                MulArr.push(mul);  
            }
           
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("white");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            
            ellipse(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < EaterArr.length; i++) {
        const eat = EaterArr[i];
        eat.eat();
    }
    for (let i = 0; i < EatArr.length; i++) {
        const Eat = EatArr[i];
        Eat.eat();
    }
    for (let i = 0; i <MulArr.length; i++) {
        const mul = MulArr[i];
        mul.eat();
    }
    

}