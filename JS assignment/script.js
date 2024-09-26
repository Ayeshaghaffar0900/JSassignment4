// Q1

var studentNames = "";

// Q2

var names = "";


// Q3

var strarr = ["ayesha","maryam","zainab"];
console.log(strarr);


// Q4

var numarr = [1,2,3,4,5,6];
console.log(numarr);


// Q5

var boolarr = [true, false];
console.log(boolarr);


// Q6

var mixarr = [strarr + numarr + boolarr];
console.log(mixarr);


// Q7

var education = [`1) SSC <br> 2) HSC <br> 3) HSC <br> 4) HSC <br> 5) HSC <br> 6) HSC <br> 7) HSC  <br>`];
document.write("<h1>Qualification</h1>")
document.write(education);


// Q8

var studentNames = ["Michael","John","Tony"];
var score = [320,230,480];

console.log(`Score of ${studentNames[0] }is ${score[0]}. Percentage: ${score[0]/500*100} %`);
console.log(`Score of ${studentNames[1] }is ${score[1]}. Percentage: ${score[1]/500*100} %`);
console.log(`Score of ${studentNames[2] }is ${score[2]}. Percentage: ${score[2]/500*100} %`);


// Q9

// a)
// var colors = ["White","Blue","Green","Black"];
// console.log(colors);

// var updateColors = ["White","Blue","Green","Black"];
// var input = prompt("Enter any color you want to add in beginning ");
// updateColors.unshift(input);
// console.log(updateColors);


// // b)

// var colors = ["White","Blue","Green","Black"];
// console.log(colors);

// var updateColors = ["White","Blue","Green","Black"];
// var input = prompt("Enter any color you want to add in  end ");
// updateColors.push(input);
// console.log(updateColors);

// // c)
// var colors = ["White","Blue","Green","Black"];
// console.log(colors);

// var updateColors = ["White","Blue","Green","Black"];
// updateColors.unshift("Grey","Red");
// console.log(updateColors);

// Q10

var scores = [320,230,160,470];
console.log(`scores of students: ${scores}`);
scores.sort();

console.log(`Ordered Scores of Students: ${scores}`);


// Q11

var cities = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
console.log(`Cities list: ${cities}`);
var updateCities = cities.slice(2,4);
console.log(updateCities);

// Q12

var arr = ["This","is","my","cat"];
console.log(`Array: ${arr}`);

var str = arr.join(" ");
console.log(`String: ${str}`);


// Q15

// var dropDown = ["Apple","Samsung","Nokia","Motorola","Sony","Haier"];
 
// for(i = 0;i < 6; i++)



// {document.write(`<select><option value =  ${dropDown[i]}" > ${dropDown[i]}</option>
//                         <option value = "${dropDown[i]}"> ${dropDown[i]}</option>
//                         <option value = "${dropDown[i]}"> ${dropDown[i]}</option>
//                         <option value = "${dropDown[i]}"> ${dropDown[i]}</option>
//                         <option value = "${dropDown[i]}"> ${dropDown[i]}</option>
//                         <option value = "${dropDown[i]}"> ${dropDown[i]}</option>
//     </select>`)}