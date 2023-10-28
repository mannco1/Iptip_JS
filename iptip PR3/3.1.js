// Напишите функцию createPoint, которая создаёт точку с координатами x и y на плоскости. Предоставьте методы getX, getY, translate и scale.
//  Метод translate производит параллельный перенос точки на величину, заданную параметрами x и y. 
//  Метод scale умножает обе координаты на заданный коэффициент.

function createPoint(x, y) {
   return {
      getX() {
         return x;
      },
      getY() {
         return y;
      },
      translate() {
         x += x;
         y += y;
      },
      scale(k) {
         x *= k;
         y *= k;
      }
   };
}

const coordinate = createPoint(10, 12);

console.log(coordinate.getX(), coordinate.getY());


coordinate.translate();
console.log(coordinate.getX(), coordinate.getY());


coordinate.scale(3);
console.log(coordinate.getX(), coordinate.getY());
