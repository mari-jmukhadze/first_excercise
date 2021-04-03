//3 shuffle

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function shuffle(arr){
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}

console.log(shuffle(array));