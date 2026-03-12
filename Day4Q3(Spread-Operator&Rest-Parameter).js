/*💡 Exercise 3: Create a function that receives any number of args as arguments and
return their sum using REST parameter */
function sum(...args){
    return args.reduce((accumulator,element)=>accumulator+element)
}
console.log(sum(1,2,3,4,5)) 
console.log(sum(10,20))