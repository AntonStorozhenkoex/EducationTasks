/*Задание 1. Поиск символа в строке*/
let newSrting = `Я изучаю JavaScript`;
let searchingSymbol = 2
console.log(newSrting.substring(0,1)) // Перпвый эллемент
console.log(newSrting[searchingSymbol]) // Третий эллемент 
console.log(newSrting[newSrting.length-1]) // Последний эллемент 
/*Задание 2.Замена символа с строке*/
let stringArray = newSrting.split(``)
stringArray[stringArray.indexOf(`ю`)] = `л`
console.log(stringArray.join(``))
console.log(newSrting.replace('JavaScript','Frontend'))
/*Задание 3. Поиск индекса ээлента массива*/
let newArray = ['cat', 'dog', 'parrot', 'horse']
console.log(newArray.indexOf(`parrot`))

for(let i in newArray){
    if (newArray[i] === `parrot`){
        console.log(i)
    }
}
/*Задание 4.Удаление эллементов из массива*/
let arrayOfAnimal = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
arrayOfAnimal.pop() // Удаление последнего эллемента массива
arrayOfAnimal.splice(arrayOfAnimal.indexOf(`fish`),1) // Удаление эллемента fish 
let lastValue = arrayOfAnimal[arrayOfAnimal.length-1]
let preLastValue = arrayOfAnimal[arrayOfAnimal.length-2]
let newAnimalArray = arrayOfAnimal.filter(elem=> ((elem != lastValue)&&( elem != preLastValue)) ) // Удаление последних двух эллементов массива 


/*Задание 5. Фильтрация массива*/
let unFiltredArray = [31, 10, 'chicken', 9, 'fish', 10]

console.log(unFiltredArray.filter(elem => typeof(elem) == typeof(`string`) ))
console.log(unFiltredArray.filter(elem => elem === 10))

/*Задание 6. Вывод свойств и значений объекта*/
const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

  for ( const [key,value] of Object.entries(person)){
      console.log(`${key}: ${value}`)
  }
console.log(`**********`)
  for ( const [key,value] of Object.entries(person)){
      if (key === 'location'){
        console.log(`Where to find: ${value}`)
      }
      else if (key === 'age'){
        console.log(`Age: ${value} ages`)
      }
      else if (key === 'firstName'){
        console.log(`First Name: ${value}`)
      }
       else if (key === 'lastName'){
        console.log(`Last Name: ${value}`)
      } else{
        console.log(`${key}: ${value}`)
      }
    
}