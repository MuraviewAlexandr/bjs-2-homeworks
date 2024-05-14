"use strict"
function solveEquation(a, b, c) {
  let arr = []; {
    let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  }
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percent = percent / 100;
  let monthlyPercent = percent / 12;
  let monthlyPayment = amount - contribution;
  monthlyPayment = monthlyPayment / countMonths;
  let totalAmount = monthlyPayment * countMonths;
  return totalAmount;
}