//1 Allert 
// Task 1: Create a JavaScript program that uses alert() to display a message to the user saying "Welcome to JavaScript!"
alert("Welcome To Javascript!");
 var Name = prompt("what is your name?");
// Task 2: Ask the user for their name using prompt() and then display a personalized greeting using alert(), such as "Hello, [name]!"
 alert("Hello" + " " + Name);

//2  Variable for String
// Task 1: Declare two string variables: one for the first name and another for the last name. Then, combine these two variables and display the full name using alert().
var fname = prompt("Enter Your First Name?");
alert(fname);
var lname = prompt("Enter Your Last Name?");
alert(lname);
var fullname = fname + lname;
alert(fullname);
// Task 2: Create a string variable that stores a favorite hobby. Then, use alert() to display the message: "My favorite hobby is [hobby]."
var hobby = prompt("Plz enter your fav hobby?");
alert("My Favourite Hobby is" + " " + hobby);

//3  Variable for Number
// Task 1: Declare two numeric variables: age and yearOfBirth. Calculate the age by subtracting yearOfBirth from the current year (you can manually input the current year) and display the result using alert().
var yearOfBirth =  prompt ("Year of Birth!");
alert(yearOfBirth);
var currentYear =  prompt ("Current Year!");
alert(currentYear);
var age = currentYear - yearOfBirth; 
alert(age);

// Task 2: Create two numeric variables to store the length and width of a rectangle. Calculate the area (length × width) and display the result in an alert.
// Create two numeric variables for length and width
var length = prompt("Enter the length of the rectangle:");
var width = prompt("Enter the width of the rectangle:");
var area = length * width;
// Display the result in an alert
alert("The area of the rectangle is: " + area);

// 4. Variable Names Legal and Illegal:
// Task 1: Write 3 variable names that are legal in JavaScript, and 3 that are illegal.

// Legal variable names in JavaScript
// var userName = 'hoor';  
// alert(userName);
// var _age = 12;     
// alert(_age);
// var $price = 670;  
// alert($price);

// Illegal variable names in JavaScript
// var 123name; // Illegal: Cannot start with a number
// var user-name; // Illegal: Hyphen is not allowed
// var name;

// Task 2: Create a variable for your age using a valid name, then change its value to your friend's age and display both in alert().
var myAge = 17; 
alert ("My age is " + myAge);
// Change its value to your friend's age
myAge = 20; 
alert("My friend's age is: " + myAge); 

// 5. Math Expressions: Familiar Operators:
// Task 1: Create a simple calculator that adds two numbers. Use prompt() to get the two numbers from the user, and display the sum using alert().
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var sum = num1 + num2;
// Display the sum using alert
alert("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Task 2: Use a math expression to calculate the result of multiplying 6 by 8, and then display the result in an alert().
var result = 6 * 8;
alert("The result of 6 multiplied by 8 is: " + result);

// Task 3: Use the modulo operator (%) to find the remainder when 17 is divided by 5, and display the result using alert().
var remainder = 17 % 5;
alert("The remainder when 17 is divided by 5 is: " + remainder);


// Challenge 2: Ask the user for two numbers, then use the arithmetic operators (+, -, *, /, %) to calculate and display their sum, difference, product, quotient, and remainder.

// Ask the user for two numbers using prompt
var num3 = prompt("Enter the first number:");
var num4 = prompt("Enter the second number:");

// Display the sum, difference, product, quotient, and remainder using alert
alert("Sum: " + (num3 * 1 + num4 * 1) + 
      " Difference: " + (num3 * 1 - num4 * 1) + 
      " Product: " + (num3 * 1 * num4 * 1) + 
      " Quotient: " + (num3 * 1 / num4 * 1) + 
      " Remainder: " + (num3 * 1 % num4 * 1));















// 1. Alerts:
// Task 1: Create a JavaScript program that uses alert() to display a message to the user saying "Welcome to JavaScript!"
// Task 2: Ask the user for their name using prompt() and then display a personalized greeting using alert(), such as "Hello, [name]!"

// 2. Variables for Strings:
// Task 1: Declare two string variables: one for the first name and another for the last name. Then, combine these two variables and display the full name using alert().
// Task 2: Create a string variable that stores a favorite hobby. Then, use alert() to display the message: "My favorite hobby is [hobby]."

// 3. Variables for Numbers:
// Task 1: Declare two numeric variables: age and yearOfBirth. Calculate the age by subtracting yearOfBirth from the current year (you can manually input the current year) and display the result using alert().
// Task 2: Create two numeric variables to store the length and width of a rectangle. Calculate the area (length × width) and display the result in an alert.

// 4. Variable Names Legal and Illegal:
// Task 1: Write 3 variable names that are legal in JavaScript, and 3 that are illegal.
// Task 2: Create a variable for your age using a valid name, then change its value to your friend's age and display both in alert().

// 5. Math Expressions: Familiar Operators:
// Task 1: Create a simple calculator that adds two numbers. Use prompt() to get the two numbers from the user, and display the sum using alert().
// Task 2: Use a math expression to calculate the result of multiplying 6 by 8, and then display the result in an alert().
// Task 3: Use the modulo operator (%) to find the remainder when 17 is divided by 5, and display the result using alert().

// Additional Challenges:
// Challenge 1: Ask the user for their birth year using prompt(), then calculate their age and display it using an alert(). Make sure to include the current year in the code.
// Challenge 2: Ask the user for two numbers, then use the arithmetic operators (+, -, *, /, %) to calculate and display their sum, difference, product, quotient, and remainder.