import { strict } from "assert"
import { setupMaster } from "cluster"

// Code your solution here!
function printString(myString) {
    console.log(myString[0])

    if(myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    }
    else{
        return true
    }
}

function reverseString(string) {
    if (string.length < 1) {
        return string 
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}
    
   


function isPalindrome(string){
    if(string.length <= 1) {
        return true
    }
    let [firstLetter] = string 
    let lastLetter = string[string.length -1]

    if (firstLetter === lastLetter){
        let middleString = string.substring(1, string.length -1)
        return isPalindrome(middleString)

        } else {
            return false
        }
    }

    console.log(isPalindrome('pizza'))
    console.log(isPalindrome('hannah'))

    function addUpTo(array, n){
        if(n > 0){
            return array[n] + addUpTo(array, n -1)

           }else {
               return array[n]
           }
        } 
        
function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

 
function includesNumber(array, n){
    if (array[0] === n){
        return true
    } else if (!array.length) {
        return false
    }
    else {
        return includesNumber(array.slice(1), n)
    }
}
