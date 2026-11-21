class loginPage
{
    constructor(page)
    {
        this.page=page;
        this.userName=page.locator('#userEmail');
        this.passWord=page.locator('#userPassword');
        this.loginBtn=page.locator('#login');
    }


    async goTo(page)
    {
         await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }
    async validLogin(username,password)
    {
     await this.userName.fill(username);
     await this.passWord.fill(password);
      await this.loginBtn.click();
    }
}

module.exports={loginPage};