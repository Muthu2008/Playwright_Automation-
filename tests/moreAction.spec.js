const {test,expect}=require('@playwright/test');
test.describe.configure({mode:'parallel'});
test("Action handling",async  ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    expect(await page.locator("#hide-textbox")).toBeVisible();
  await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});


    //await page.pause();
//     page.on('dialog',dialog=>dialog.accept());
//     await page.locator("#confirmbtn").click();
//     await page.locator("mousehover").hover();
//     const framePage=await page.frameLocator("#courses-iframe");
//    await framePage.locator("li a[href*='lifetime']").click();
//    const supscriper=await framePage.locator(".text h2 span").textContent();
//    console.log(supscriper);


});

test('visual test',async({page})=>{

    await page.goto("https://www.google.com/");
expect(await page.screenshot()).toMatchSnapshot('landing.png');

})