let firstMonthSalary = prompt("Enter first month salary");
console.log(firstMonthSalary);

let secondMonthSalary = prompt("Enter second month salary");
alert(`Your salary for 2 month is: ${+firstMonthSalary + +secondMonthSalary}$`);
console.log(secondMonthSalary);

let bonusSalary = 1;
alert(`Your have extra bonus! Your total salary was: ${+firstMonthSalary + +secondMonthSalary}$. It's increase for 1$ and now it is:${+firstMonthSalary + +secondMonthSalary+ +bonusSalary}$.`);
console.log(bonusSalary);

let finalSalaryAmount = +firstMonthSalary + +secondMonthSalary+ +bonusSalary

let max = 2000;
if ((finalSalaryAmount) <= +max) alert("I'm out");
else alert("I'm ready to work");


