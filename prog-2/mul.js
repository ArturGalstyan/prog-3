var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var EaterArr = [];
var EatArr = [];
var MulArr = [];
var side = 20;
class Mul extends LivingCreature {
    
   
  mul() {
    let found = this.chooseCell(0);
    let exact = random(found)

    if (exact && this.energy > 8) {
        let x = exact[0];
        let y = exact[1];

        let mul = new Mul(x, y);
        matrix[y][x] = 5;
       MulArr.push(mul);

        this.energy = 20;
    } 
}
eat(){
    let found = this.chooseCell(3,2) ;
    
    let exact = random(found);
    

    if (exact){
        this.energy +=5;
        let x = exact[0];
        let y = exact[1];

       
        for(let i = 0;i<EaterArr.length;i++) {

            if (EaterArr[i].x == x && EaterArr[i].y == y) {
               EaterArr.splice(i, 1)
            }
        }
        for(let i = 0;i<grassEaterArr.length;i++) {

            if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                grassEaterArr.splice(i, 1)
            }
        }

        matrix[y][x] =5
        matrix[this.y][this.x] =1
        
        this.x = x;
        this.y = y

        if(this.energy > 30){
            this.mul()
        }
    }
}
move(){
    let found = this.chooseCell(0);
    let exact = random(found)

    if (exact){
        let x = exact[0];
        let y = exact[1];

        matrix[y][x] = 1
        matrix[this.y][this.x] = 1
       

        this.x = x;
        this.y = y;

        this.energy--

        if(this.energy < 0){
            this.die()
        }
    }else {
        this.energy--
        if(this.energy < 0){
            this.die()
        }
    }
}

die(){
    for (let i = 0; i < MulArr.length; i++) {
        if( MulArr[i].x == this.x && MulArr[i].y == this.y ){
            MulArr.splice(i, 1)
        }

    }
    matrix[this.y][this.x] = 0;
}
}