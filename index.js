const ages = [ 3, 9, 23, 64, 2, 8, 28, 93]

const ageDifference = (array) => {
console.log(array[array.length-1]- array[0])
let average = 0
  for(let i =0 ; i< array.length; i++){
    average += array[i]
  }
  console.log(ages.length)
  console.log(average)
  console.log(average/ages.length)
}

ageDifference(ages)

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

const averageName = (array) => {
const joinNames = array.join('')
let count = 0
for(let i = 0; i < joinNames.length; i++){
    count ++    
}
  return count/array.length
}
console.log(averageName(names),"average of names")

const nameWithSpace =(array) =>{
let string =''
for(let i = 0; i < array.length; i++){
  string += array[i] +" "
}
  return string
}
console.log(nameWithSpace(names),"names with spaces")

const transformNames = (array) => {
  const nameLength = []

  for(let i = 0; i < array.length; i++){
    nameLength.push(array[i].length)
}
  return nameLength
}
const nameLength = transformNames(names)
console.log(transformNames(names))

const calculateSum = (array) =>{
  let count = 0 
  for(let i = 0; i < array.length; i++){
    count += array[i]
  }
 return count
}

console.log(calculateSum(nameLength))

const concatWord = (word,n) =>{
   let string =""
    for(let i = 0; i < n; i++){
     string += word
    }
  return string
}
console.log(concatWord("Hello",3))

const fullName = (firstName,LastName) =>{
  return firstName + " " + LastName
}

console.log(fullName("Sarah","Lewis"))

const  moreThanAHundred = (array) =>{
  let count  = 0
      for(let i = 0; i < array.length; i++){
        count += array[i]
      }
          return (count > 100)
}

console.log(moreThanAHundred([2,1,3,4,100]))

const averageOfArray = (array) =>{
 count = 0
  for(let i = 0; i < array.length; i++){
    count += array[i]
  }
  return count/array.length
}

console.log(averageOfArray([1,2,3]))

const compareArrays = (array1,array2) =>{
  let count1 =0
  let count2 =0
  for(let i = 0; i < array1.length; i++){
    count1 += array1[i]
  }
  for(let i = 0; i < array2.length; i++){
    count2 += array2[i]
  }
 return (count1/array1.length > count2/array2.length)
}

console.log(compareArrays([0,4,8,8],[3,4]))

const willBuyDrink = (isHotOutside ,moneyInPocket ) => {
  return isHotOutside && (moneyInPocket> 10.50)
}

console.log(willBuyDrink(true ,10))