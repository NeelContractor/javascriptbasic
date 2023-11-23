// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const distanceInKilometer = 100;

const convertInToMeter = (distanceInKilometer) => {
    return distanceInKilometer* 1000;
}
const convertInToCentimeter = (distanceInKilometer) => {
    return distanceInKilometer* 100000;
}
console.log(`Distance in Meter: ${convertInToMeter(distanceInKilometer)}`);
console.log(`Distance is Centimeter: ${convertInToCentimeter(distanceInKilometer)}`);

// Question-2:    WAP to input radius of a circle and log the area of circle.

const radiusOfCircle = 10;

const areaOfCircle = (radiusOfCircle) => {
    return 3.14 * radiusOfCircle * radiusOfCircle;
}
console.log(`Area of The Circle: ${areaOfCircle(radiusOfCircle)}`);

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const firstNum = 10;
const secNum = 20;

const add = (firstNum, secNum) => {
    return firstNum + secNum;
}
const sub = (firstNum, secNum) => {
    return firstNum - secNum;
}
const div = (firstNum, secNum) => {
    return firstNum / secNum;
}
const mul = (firstNum, secNum) => {
    return firstNum * secNum;
}
console.log(`Addition : ${add(firstNum, secNum)}`);
console.log(`Substration : ${sub(firstNum, secNum)}`);
console.log(`Division : ${div(firstNum, secNum)}`);
console.log(`Multiplication : ${mul(firstNum, secNum)}`);


// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const firstSubjectMark = 80;
const secondSubjectMark = 90;

const totalMarks = (firstSubjectMark, secondSubjectMark) => {
    return firstSubjectMark + secondSubjectMark;
}
const percentage = (firstSubjectMark, secondSubjectMark) => {
    return (totalMarks(firstSubjectMark, secondSubjectMark) / 200) * 100;
}
console.log(`Total Marks : ${totalMarks(firstSubjectMark, secondSubjectMark)}`);
console.log(`Percentage : ${percentage(firstSubjectMark, secondSubjectMark)}`);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const lenghtOfRectangle = 10;
const breathOfRectangle = 7;

const areaOfRectangle = (lenghtOfRectangle, breathOfRectangle) => {
    return lenghtOfRectangle * breathOfRectangle;
}
const perimeterOfRectangle = (lenghtOfRectangle, breathOfRectangle) => {
    return 2* (lenghtOfRectangle + breathOfRectangle);
}
console.log(`Area of the Rectangle : ${areaOfRectangle(lenghtOfRectangle,breathOfRectangle)}`);
console.log(`Perimeter of the rectangle : ${perimeterOfRectangle(lenghtOfRectangle,breathOfRectangle)}`);

// Question-6:    WAP to input n numbers and log the average of those number.

const numbers = [10, 20, 30, 40, 50];

const average = (numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum / numbers.length;
}

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const distanceBetweenTwoCities = 100;

const convertCitiesDistanceInToMeter = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities* 1000;
}
const convertCitiesDistanceInToFeet = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 3280.84;
}
const convertCitiesDistanceInToInches = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 39370.1;
}
const convertCitiesDistanceInToCentimeter = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 100000;
}
console.log(`Distance in Meters : ${convertCitiesDistanceInToMeter(distanceBetweenTwoCities)}`);
console.log(`Distance in Feets : ${convertCitiesDistanceInToFeet(distanceBetweenTwoCities)}`);
console.log(`Distance in Inches : ${convertCitiesDistanceInToInches(distanceBetweenTwoCities)}`);
console.log(`Distance in Centimeters : ${convertCitiesDistanceInToCentimeter(distanceBetweenTwoCities)}`);

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperatureInFahrenheit = 100;

const convertTemperatureInToCentigrade = (temperatureInFahrenheit) => {
    return (temperatureInFahrenheit - 32) * 5 / 9;
}
console.log(`Temperature into Centigrade : ${convertTemperatureInToCentigrade(temperatureInFahrenheit)}`);

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
const quantity = 10;
const rate = 100;

const calculateAmount = (quantity, rate) => {
    return quantity * rate;
}
const calculateDiscountAmount = (quantity, rate) => {
    return calculateAmount(quantity, rate) * 10 / 100;
}
const calculateAfterDiscountAmount = (quantity, rate) => {
    return calculateAmount(quantity, rate) - calculateDiscountAmount(quantity, rate);
}
console.log(`Amount : ${calculateAmount(quantity, rate)}`);
console.log(`Discount Amount :${calculateDiscountAmount(quantity, rate)}`);
console.log(`Amount After Discount : ${calculateAfterDiscountAmount(quantity, rate)}`);

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmount = 1000;
const rateOfInterest = 10;
const numberOfYears = 2;

const simpleInterest = (principalAmount, rateOfInterest, numberOfYears) => {
    return (principalAmount * rateOfInterest * numberOfYears) / 100;
}
console.log(`Simple Interest : ${simpleInterest(principalAmount,rateOfInterest,numberOfYears)}`);
