///////////////////////////////////////
/////////// Challange 1 //////////////
/////////////////////////////////////
/*
let marksWight, markHeight, johnWight, johnHeight, markHigherBMI;

(marksWight = 78), (markHeight = 1.69), (johnWight = 92), (johnHeight = 1.95);

markHigherBMI = marksWight / markHeight ** 2 > johnWight / johnHeight ** 2;
console.log(markHigherBMI);

(marksWight = 95), (markHeight = 1.88), (johnWight = 85), (johnHeight = 1.76);

markHigherBMI = marksWight / markHeight ** 2 > johnWight / johnHeight ** 2;
console.log(markHigherBMI);
*/

///////////////////////////////////////
/////////// Challange 2 //////////////
/////////////////////////////////////
/*
let marksWight, markHeight, markBMI, johnWight, johnHeight, johnBMI;

//test 1
marksWight = 78;
markHeight = 1.69;
markBMI = marksWight / markHeight ** 2;
johnWight = 92;
johnHeight = 1.95;
johnBMI = johnWight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
} else {
  console.log(`john's (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}

//test 2
marksWight = 95;
markHeight = 1.88;
markBMI = marksWight / markHeight ** 2;
johnWight = 85;
johnHeight = 1.76;
johnBMI = johnWight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
} else {
  console.log(`john's (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}
*/

///////////////////////////////////////
/////////// Challange 3 //////////////
/////////////////////////////////////
/*
const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScoree = (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScoree && dolphinsScore >= 100) {
  console.log(`dolphins wins the trophy`);
} else if (koalasScoree > dolphinsScore && koalasScoree >= 100) {
  console.log(`koalas wins the trophy`);
} else if (
  dolphinsScore === koalasScoree &&
  koalasScoree >= 100 &&
  dolphinsScore >= 100
) {
  console.log(`it is a draw`);
} else {
  console.log(`No one wins the trophy`);
}
*/

///////////////////////////////////////
/////////// Challange 4 //////////////
/////////////////////////////////////
/*
const bill = 275;
console.log(
  `The bill was ${bill}, the tip was${
    bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100)
  }, the total value ${
    bill >= 50 && bill <= 300
      ? bill + bill * (15 / 100)
      : bill + bill * (20 / 100)
  }`
);
*/
