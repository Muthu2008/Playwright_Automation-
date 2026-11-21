import { Page,Locator,expect} from "@playwright/test";

export class loginPage
{
    page:any;
    userName:Locator;
    passWord:Locator;
    loginBtn:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.userName=page.locator('#userEmail');
        this.passWord=page.locator('#userPassword');
        this.loginBtn=page.locator('#login');
    }


    async goTo(page:Page)
    {
         await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }
    async validLogin(username:string,password:string)
    {
     await this.userName.fill(username);
     await this.passWord.fill(password);
      await this.loginBtn.click();
    }
}

//module.exports={loginPage};