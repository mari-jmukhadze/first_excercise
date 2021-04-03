//2

function shape(type){
    this.type = type;
}

shape.prototype.getType = function() {
    return this.type
}

// var one = new shape ('circle')
// console.log(one.getType());

function triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}


triangle.prototype = new shape('triangle')

triangle.prototype.perimeter = function() {
    return this.a + this.b + this.c;
}


var trngl = new triangle(1, 2, 3);
console.log(trngl.perimeter());
console.log(trngl.getType())
