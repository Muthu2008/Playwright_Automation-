const { test } = require('@playwright/test');
const ExcelJs = require('exceljs');

test('Read data from Excel', async () => {

    const filePath = '/Users/jagadesh/Downloads/download.xlsx';

    // const workbook = new ExcelJs.Workbook();

    // await workbook.xlsx.readFile(filePath);

    // // console.log('Available sheets:');
    // // console.log(workbook.worksheets.map(sheet => sheet.name));

    // const workSheet = workbook.worksheets[0];

    // // console.log('Using sheet:', workSheet.name);

    // workSheet.eachRow((row, rowNum) => {

    //     if (rowNum === 2) {
    //         console.log('Column 2 value:', row.getCell(3).value);
    //     }

    // });

    const workBook=new ExcelJs.Workbook();
    await workBook.xlsx.readFile(filePath);
   const workSheet= workBook.worksheets[0];
   workSheet.eachRow((row,rowNum)=>
{
   
    if(rowNum===3)
    {
        const value=[]
        row.eachCell((cell,cellNum)=>
        {
            value.push(cell.value);
        }

       
    )
    console.log(value);
    
    }
})

});

