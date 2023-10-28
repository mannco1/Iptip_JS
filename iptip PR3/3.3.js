// Напишите класс Random со статическими методами:
// - Random.nextDouble(low, high) - случайное число с плавающей точкой.
// - Random.nextInt(low, high) - случайное целое число.
// - Random.nextElement(array) - случайный элемент заданного массива из чисел.

// Вводятся 5 входных параметров в порядке следования функции. Ответ - 3 числа, результат работы каждой функции.

class Random {
   constructor(low, high) {
      this.low = low;
      this.high = high;
   }
   static nextDouble(low, high) {
      return Math.random() * (high - low) + low;
   }
   static nextInt(low, high) {
      return Math.floor(Math.random() * (high - low + 1)) + low;
   }


   static nextElement(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
   }

}


const double = Random.nextDouble(2, 100)
const Int = Random.nextInt(2, 100)
const arr = Random.nextElement([25888, 7657567, 444, -32])

console.log(double)
console.log(Int)
console.log(arr)