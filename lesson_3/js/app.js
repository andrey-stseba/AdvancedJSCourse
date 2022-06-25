// Числа
console.log(typeof 42) // "number"
console.log(typeof Infinity) // "number"
console.log(typeof NaN) // "number", несмотря на то, что смысл этого значения "Not-A-Number" (не число)

// Строки
console.log(typeof 'строка') // "string"

let name = 'Василий'
console.log(typeof `Привет, ${name}`) // "string"

// Булевы значения
console.log(typeof true) // "boolean"
console.log(typeof false) // "boolean"

// Символы
console.log(typeof Symbol()) // "symbol"

// undefined
let declaredButUndefinedVariable
console.log(typeof declaredButUndefinedVariable) // "undefined";

// Объекты
console.log(typeof { a: 1 }) // "object"
console.log(typeof [1, 2, 3]) // такая структура данных, как массив, тоже "object"

// null
console.log(typeof null) // "object"

// function
console.log(typeof function () {}) // "function"
