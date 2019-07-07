const xlsx = require('xlsx');
const fs = require('fs');

//Desonerados workbooks
const desCatCompAnaliticas = xlsx.readFile('../tables/sinapi/2019/05/desonerado/CATALOGO_COMPOSICOES_ANALITICAS_EXCEL_05_2019.xls');
const desCustoCompAnalitico = xlsx.readFile('../tables/sinapi/2019/05/desonerado/SINAPI_Custo_Ref_Composicoes_Analitico_PE_201905_Desonerado.xls');
const desCustoCompSintetico = xlsx.readFile('../tables/sinapi/2019/05/desonerado/SINAPI_Custo_Ref_Composicoes_Sintetico_PE_201905_Desonerado.xls');
const desPrecoInsumos = xlsx.readFile('../tables/sinapi/2019/05/desonerado/SINAPI_Preco_Ref_Insumos_PE_052019_Desonerado.XLS');

//Desonerados worksheets
const sheet_desCatCompAnaliticas = desCatCompAnaliticas.Sheets['Com custo'];
const sheet_desCustoCompAnalitico = desCustoCompAnalitico.Sheets['planilhanull'];
const sheet_desCustoCompSintetico = desCustoCompSintetico.Sheets['planilhanull'];
const sheet_desPrecoInsumos = desPrecoInsumos.Sheets['sheet1'];

//transformando em JSON
const json_desCatCompAnaliticas = xlsx.utils.sheet_to_json(sheet_desCatCompAnaliticas);
const json_desCustoCompAnalitico = xlsx.utils.sheet_to_json(sheet_desCustoCompAnalitico);
const json_desCustoCompSintetico = xlsx.utils.sheet_to_json(sheet_desCustoCompSintetico);
const json_desPrecoInsumos = xlsx.utils.sheet_to_json(sheet_desPrecoInsumos);

console.log(sheet_desCatCompAnaliticas);
