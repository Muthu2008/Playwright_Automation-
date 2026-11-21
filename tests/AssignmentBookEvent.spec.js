const {test,expect}=   require('@playwright/test');
const { text } = require('node:stream/consumers');
test('splapage data validation', async ({ page }) => {


    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    
    await page.getByPlaceholder("you@email.com").fill("muthu123@gamil.com");
    await page.locator("input[name='password']").fill("MuthuAmmu@2026");
    await page.getByRole('button',{name:"Sign In"}).click();


    await page.getByTestId('nav-events').click();
    await page.getByRole('button',{name:'Add New Event'}).click();

    await page.getByTestId('event-title-input').fill("Marrage Event ");
    await page.getByPlaceholder("Describe the event…").fill("wedding realated function that");
    await page.getByLabel("category*").selectOption("Sports");
    await page.getByPlaceholder("e.g. Bangalore").fill("Chennai");
    await page.getByPlaceholder("Venue name & address").fill("Imjambakkam");
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill("2026-12-03T12:30");
    await page.locator("//input[@id='price-($)']").fill("2.2");
    await page.locator("#total-seats").fill("100");
    await page.getByRole('button',{name:'Add Event'}).click();
   
    await expect(await page.locator("tbody td").filter({hasText:"Marrage Event"})).toBeVisible();

    await page.getByTestId('nav-events').click();

   await page.getByRole('article').filter({ hasText: 'SportsMarrage EventThu, 3' }).getByTestId('book-now-btn').click();
   await page.locator("//button[text()='+']").click();
   await page.locator("#customerName").fill("muthukumar");
   await page.locator("#customer-email").fill("muthu123@gmail.com");
   await page.locator("#phone").fill("7893645213");
   await page.getByRole('button',{name:'Confirm Booking'}).click();
  //page.locator('//h3[text()="Booking Confirmed! 🎉"]').textContent()).toBeVisible();
  await expect(await page.locator(".text-xl")).toBeVisible();
  const bookingRef=await page.locator(".booking-ref").textContent();
  console.log(bookingRef);
  await page.getByRole('button', { name: 'View My Bookings' }).click();
  console.log(bookingRef);
  await page.locator("booking-card").filter({hasText:bookingRef}).getByRole('button',{name:'View Details'}).click();
  

 
  

    


});