var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position: relative;\n    top:".concat(a * 400, "px;\n    left:").concat(a * 400, "px;\n    width:").concat(this.width, "px;\n    height:").concat(this.height, "px;\n    background:").concat(this.color, "\";\n    ></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'navy');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
