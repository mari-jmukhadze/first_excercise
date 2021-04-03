// 1


function list (a){
    this.a = a
}

var array = [];

function first() {
    for (i = 1; i < 5; i++){
        for (j=1; j<5; j++){
            array.push(i*j);
            console.log(i*j);
        }
    }
} 

first();

console.log(array)


