const xlsx = require('xlsx');
const fs = require('fs');

const budget = xlsx.readFile("../../utilities/budgetTest-revitalis.xlsx");
const budgetSheet = budget.Sheets[budget.SheetNames[0]];
const budgetContent = xlsx.utils.sheet_to_json(budgetSheet);

const reference = xlsx.readFile("../../utilities/referenceTest-revitalis.xlsx");
const referenceSheet = reference.Sheets[reference.SheetNames[0]];
const referenceContent = xlsx.utils.sheet_to_json(referenceSheet);

// console.log(JSON.stringify(budgetContent));

// fs.writeFileSync('budgetTest.json', JSON.stringify(budgetContent));
// fs.writeFileSync('referenceTest.json', JSON.stringify(referenceContent));


// O Resultado desse bloco são vários XX nos lugares dos preços e undefined onde não existem os preços

// budgetContent.map((record) => {
//   console.log(record.preco);
// });

//O resultado desse bloco de código são os preços da tabela de referência inseridos na coluna
// de preços da tabela de quantitativos. Note que "Total" é a soma de das linhas abaixo antes do
// próximo "Total", ou seja, a soma de todos os materiais/serviços em uma categoria.

// for(let i = 0; i < budgetContent.length; i++) {
//   budgetContent[i].preco = referenceContent[i].preco;
//   console.log(budgetContent[i].preco);
// }

/**
 * A distribuição do template de orçamento se dá da seguinte forma:
 * 1 - Item: código do item no orçamento
 * 2 - Serviço/Material: Nome do serviço ou material;
 * 3 - Unidade: ...
 * 4 - Quantidade: ...
 * 5 - Preço Unitário - Material: ...
 * 6 - Preço Unitário - Mão de Obra: ...
 * 7 - Preço Total: (Preço Material + Preço Mão de Obra) * Quantidade,
 * */

const bSize = budgetContent.length;
const rSize = referenceContent.length;

for(let i = 0; i < bSize; i++) {
  for(let j = 0; j < rSize; j++) {
    if(budgetContent[i].pu_material === "Total"){
      break;
    }
    else {
      if(budgetContent[i].servico_material !== referenceContent[j].servico_material){
        continue;
      }
      else {
        budgetContent[i].pu_material = referenceContent[j].pu_material;
        budgetContent[i].pu_obra = referenceContent[j].pu_obra;
        budgetContent[i].pTotal = ((budgetContent[i].pu_material + budgetContent[i].pu_obra) * budgetContent[i].quantidade).toFixed(2);
        break;
      }
    }
  }
}

fs.writeFileSync('budgetCompleteTest.json', JSON.stringify(budgetContent));


// console.log(referenceContent);
