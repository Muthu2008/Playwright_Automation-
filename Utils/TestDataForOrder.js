const base=require('@playwright/test');
exports.customtest=base.test.extend(
    {
        testDataForOrder : {
              productName : "ZARA COAT 3",
              username:"kavinilani@gmail.com",
              password:"MuthuAmmu@2026",

        }
    }

)