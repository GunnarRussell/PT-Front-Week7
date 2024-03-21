// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//      a. Programmatically subtract the value of the first element in the array from the value in the last element of the array. 

console.log(ages[ages.length - 1] - ages[0]);

//      b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.splice(ages.length, 0, 10);
console.log(ages[ages.length - 1] - ages[0]);

//      c. Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (i = 0; i < ages.length; i++)
{
    sum += ages[i];
}
console.log(sum / ages.length);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//      a. Use a loop to iterate through the array and calculate the average number of letters per name.

sum = 0;
for (i = 0; i < names.length; i++)
{
    sum += names[i].length;
}
console.log(sum / names.length);

//      b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let nameString = "";
for (i = 0; i < names.length; i++)
{
    nameString += names[i] + " ";
}
console.log(nameString);

// 3. How do you access the last element of any array?

console.log("myArray[myArray.length - 1]");

// 4. How do you access the first element of any array?

console.log("myArray[0]");

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 

let nameLengths = [];
names.forEach(function(name)
{
    nameLengths.push(name.length);
})
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

sum = 0;
for (i = 0; i < nameLengths.length; i++)
{
    sum += nameLengths[i];
}
console.log(sum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 


// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

