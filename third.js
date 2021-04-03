//3 shuffle

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function shuffle(arr){
    return arr = arr.sort(() => Math.random() - 0.5) //math.random() - 0.5 is positive or negative so orders randomly
}


console.log(shuffle(array))