// Напишите функцию createPoint, которая создаёт точку с координатами x и y на плоскости. Предоставьте методы getX, getY, translate и scale.
//  Метод translate производит параллельный перенос точки на величину, заданную параметрами x и y. 
//  Метод scale умножает обе координаты на заданный коэффициент.

// Повторите предыдущее упражнение, используя синтаксис классов. Где Point будет названием класса.

class Point {
   constructor(x, y) {
      this.getX = x;
      this.getY = y;
   }


   translate() {
      this.getX += this.getX;
      this.getY += this.getY;
   }
   scale(k) {
      this.getX *= k;
      this.getY *= k;
   }

};





const coordinate = new Point(10, 12);

console.log(coordinate.getX, coordinate.getY);


coordinate.translate();
console.log(coordinate.getX, coordinate.getY);


coordinate.scale(3);
console.log(coordinate.getX, coordinate.getY);
