const xlsx = require('xlsx');

const budget = xlsx.readFile("../../utilities/budgetTest.xlsx");
const budgetSheet = budget.Sheets[budget.SheetNames[0]];
const budgetContent = xlsx.utils.sheet_to_json(budgetSheet);

const reference = xlsx.readFile("../../utilities/referenceTest.xlsx");
const referenceSheet = reference.Sheets[reference.SheetNames[0]];
const referenceContent = xlsx.utils.sheet_to_json(referenceSheet);

// budgetContent.map((record) => {
//   console.log(record.preco);
// });

// for(let i = 0; i < budgetContent.length; i++) {
//   budgetContent[i].preco = referenceContent[i].preco;
// }

const bSize = budgetContent.length;
const rSize = referenceContent.length;

for(let i = 0; i < bSize; i++) {
  for(let j = 0; j < rSize; j++) {
    console.log(i + ' e ' + j);
  }
  // for(let j = 0; j < rSize; i++){
  //   console.log('i é: ' + i + ' e j é: ' + j);
  // }
}

// console.log(bSize + ' e ' + rSize);
