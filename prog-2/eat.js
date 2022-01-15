var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var EaterArr = [];
var EatArr = [];
var MulArr = [];
var side = 20;
class Eat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x+1, this.y-1],
            [this.x-1, this.y+1],
            
        ];
    }
    getNewCordinates(){
        this.directions = [
            [this.x+1, this.y-1],
            [this.x-1, this.y+1],
            
        ];
        
  
}
chooseCell(char1,char2) {
    this.getNewCordinates();
      let result = [];

      for (let i = 0; i < this.directions.length; i++) {
          let x = this.directions[i][0];
          let y = this.directions[i][1];

          if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
              if (matrix[y][x] == char1 || char2) {
                  result.push(this.directions[i]);
              }
          }

      }

      return result;
  }
  mul() {
    let found = this.chooseCell(0);
    let exact = random(found)

    if (exact && this.energy > 8) {
        let x = exact[0];
        let y = exact[1];

        let eeat = new Eat(x, y);
        matrix[y][x] = 4;
        EatArr.push(eeat);

        this.energy = 20;
    } 
}
eat(){
    let found = this.chooseCell(1,5) ;
    
    let exact = random(found);
    

    if (exact){
        this.energy +=5;
        let x = exact[0];
        let y = exact[1];


        for(let i = 0;i<MulArr.length;i++) {

            if (MulArr[i].x == x && MulArr[i].y == y) {
                MulArr.splice(i, 1)
            }
        }
        for(let i = 0;i<grassArr.length;i++) {

            if (grassArr[i].x == x && grassArr[i].y == y) {
                grassArr.splice(i, 1)
            }
        }


        matrix[y][x] = 4
        matrix[this.y][this.x] = 4
        
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

        matrix[y][x] = 4
        matrix[this.y][this.x] = 0

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
    for (let i = 0; i < EatArr.length; i++) {
        if( EatArr[i].x == this.x && EatArr[i].y == this.y ){
            EatArr.splice(i, 1)
        }

    }
    matrix[this.y][this.x] = 0;
}
}