"use strict";

///////////////////////////////////////
/////////// Challange 1 //////////////
/////////////////////////////////////
/*
const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) console.log("dolphines win the trophy");
  else if (avgKoalas >= 2 * avgDolphins) console.log("koalas win the trophy");
  else console.log("no one wins");
};

const avgDolphins = average(44, 23, 71),
  avgKoalas = average(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
*/

///////////////////////////////////////
/////////// Challange 2 //////////////
/////////////////////////////////////
/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

///////////////////////////////////////
/////////// Challange 3 //////////////
/////////////////////////////////////
/*
const mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

const higherBMI = (markBMI, johnBMI) =>
  markBMI > johnBMI
    ? console.log(
        `${mark.fullname}'s BMI (${mark.BMI}) is higher than${john.fullname}'s BMI (${john.BMI}`
      )
    : console.log(
        `${john.fullname}'s BMI (${john.BMI}) is higher than${mark.fullname}'s BMI (${mark.BMI}`
      );

higherBMI(mark.BMI, john.BMI);
*/

///////////////////////////////////////
/////////// Challange 4 //////////////
/////////////////////////////////////
/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

const calcAve = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

const bills = [125, 555, 44];
const tips = [];

for (let i = 0; i < bills.length; i++) tips.push(calcTip(bills[i]));

const totals = [];
for (let i = 0; i < bills.length; i++) totals.push(bills[i] + tips[i]);

const average = calcAve(totals);

console.log(bills);
console.log(tips);
console.log(totals);
console.log(average);
*/
